import { readFile } from "node:fs/promises"
import path from "node:path"

export async function readDesignTokens<const Names extends readonly string[]>(
  names: Names
): Promise<{ [Name in Names[number]]: string }> {
  const css = await readFile(
    path.resolve(process.cwd(), "../design-system/handover/tokens.css"),
    "utf8"
  )
  const values = {} as { [Name in Names[number]]: string }

  for (const name of names) {
    const match = css.match(new RegExp(`--${name}:\\s*([^;]+);`))

    if (!match?.[1]) {
      throw new Error(`Missing canonical design token: ${name}`)
    }

    values[name as Names[number]] = match[1].trim()
  }

  return values
}
