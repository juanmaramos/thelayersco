import { escapeHtml } from "@/lib/server/email"

type EstimateEmailInput = {
  address: string
  annualEmploymentCost: string
  capacityAssumption: string
  currentWorkflowValue: string
  estimatedAnnualCapacityValue: string
  greeting: string
  hoursPerPersonPerWeek: number
  hoursReturned: string
  legalName: string
  people: number
  privacyUrl: string | null
  rerunUrl: string | null
  talkUrl: string | null
  workingWeeksPerYear: number
  workingWeeksReturned: string
}

export function buildEstimateEmail({
  address,
  annualEmploymentCost,
  capacityAssumption,
  currentWorkflowValue,
  estimatedAnnualCapacityValue,
  greeting,
  hoursPerPersonPerWeek,
  hoursReturned,
  legalName,
  people,
  privacyUrl,
  rerunUrl,
  talkUrl,
  workingWeeksPerYear,
  workingWeeksReturned,
}: EstimateEmailInput) {
  const resultText = [
    greeting,
    "",
    "Your Layers workflow opportunity estimate",
    "",
    `Estimated annual capacity value: ${estimatedAnnualCapacityValue}`,
    `Hours returned: ${hoursReturned}`,
    `Working weeks returned: ${workingWeeksReturned}`,
    `Current workflow value: ${currentWorkflowValue}`,
    "",
    `Inputs: ${people} people × ${hoursPerPersonPerWeek} hours per person each week × ${annualEmploymentCost} annual employment cost.`,
    `Capacity assumption: ${capacityAssumption}.`,
    `Method: ${workingWeeksPerYear} working weeks for a suitable recurring workflow redesigned end to end.`,
    "",
    "This estimate shows where to look. The next step is to map the workflow, test the assumptions, and decide whether a skill, plugin, or application is the smallest reliable solution.",
    ...(talkUrl ? ["", `Talk through your estimate: ${talkUrl}`] : []),
    ...(rerunUrl ? [`Run another estimate: ${rerunUrl}`] : []),
    "",
    "This is a capacity estimate, not guaranteed cash or headcount savings. It excludes implementation and model costs.",
    "",
    `Layers is operated by ${legalName}.`,
    address,
    ...(privacyUrl ? [`Privacy: ${privacyUrl}`] : []),
    "To stop occasional workflow insights, reply with unsubscribe.",
  ].join("\n")

  const resultHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>Your Layers workflow opportunity estimate</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f6f8;color:#11161c;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">Your estimate is ready. See the capacity value and the next useful step.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;background-color:#f3f6f8;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;border-collapse:collapse;background-color:#ffffff;border:1px solid #c8d2dc;">
            <tr>
              <td style="padding:24px 32px;background-color:#11161c;color:#f4f7fa;font-size:24px;line-height:30px;font-weight:700;letter-spacing:-0.5px;">Layers</td>
            </tr>
            <tr>
              <td style="padding:36px 32px 38px;background-color:#1754d1;color:#f4f7fa;">
                <p style="margin:0 0 16px;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:18px;letter-spacing:1.3px;text-transform:uppercase;">Workflow opportunity estimate</p>
                <p style="margin:0 0 8px;font-size:15px;line-height:24px;">Estimated annual capacity value</p>
                <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:52px;line-height:56px;letter-spacing:-2px;">${escapeHtml(estimatedAnnualCapacityValue)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px;font-size:16px;line-height:26px;">${escapeHtml(greeting)}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;border-top:1px solid #c8d2dc;">
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #c8d2dc;color:#5d6874;font-size:14px;line-height:20px;">Hours returned</td>
                    <td align="right" style="padding:14px 0;border-bottom:1px solid #c8d2dc;font-size:17px;line-height:22px;font-weight:700;">${escapeHtml(hoursReturned)}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #c8d2dc;color:#5d6874;font-size:14px;line-height:20px;">Working weeks returned</td>
                    <td align="right" style="padding:14px 0;border-bottom:1px solid #c8d2dc;font-size:17px;line-height:22px;font-weight:700;">${escapeHtml(workingWeeksReturned)}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #c8d2dc;color:#5d6874;font-size:14px;line-height:20px;">Current workflow value</td>
                    <td align="right" style="padding:14px 0;border-bottom:1px solid #c8d2dc;font-size:17px;line-height:22px;font-weight:700;">${escapeHtml(currentWorkflowValue)}</td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:24px;border-collapse:collapse;background-color:#eaf0f4;">
                  <tr>
                    <td style="padding:20px;">
                      <p style="margin:0 0 8px;font-family:'Courier New',Courier,monospace;font-size:11px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:#1754d1;">How this was calculated</p>
                      <p style="margin:0 0 8px;font-size:14px;line-height:22px;"><strong>Inputs:</strong> ${people} people × ${hoursPerPersonPerWeek} hours each week × ${escapeHtml(annualEmploymentCost)} annual employment cost.</p>
                      <p style="margin:0;font-size:14px;line-height:22px;"><strong>Assumption:</strong> ${escapeHtml(capacityAssumption)}. The model uses ${workingWeeksPerYear} working weeks.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;background-color:#e5ecff;border-top:1px solid #c8d2dc;">
                <p style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:34px;letter-spacing:-0.6px;">Turn the number into a workflow decision.</p>
                <p style="margin:0 0 24px;color:#293039;font-size:15px;line-height:24px;">We can map the work, test the assumptions, and identify whether a skill, plugin, or application is the smallest reliable solution.</p>
                ${talkUrl ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td bgcolor="#11161c" style="background-color:#11161c;"><a href="${escapeHtml(talkUrl)}" style="display:inline-block;padding:14px 20px;color:#f4f7fa;font-size:15px;line-height:20px;font-weight:700;text-decoration:none;">Talk through your estimate&nbsp;&nbsp;→</a></td></tr></table>` : ""}
                ${rerunUrl ? `<p style="margin:20px 0 0;font-size:13px;line-height:20px;"><a href="${escapeHtml(rerunUrl)}" style="color:#11161c;text-decoration:underline;">Run another estimate</a></p>` : ""}
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;background-color:#11161c;color:#aeb8c3;font-size:11px;line-height:18px;">
                <p style="margin:0 0 12px;">This is a capacity estimate, not guaranteed cash or headcount savings. It excludes implementation and model costs.</p>
                <p style="margin:0;">Layers is operated by ${escapeHtml(legalName)}. ${escapeHtml(address)}${privacyUrl ? ` · <a href="${escapeHtml(privacyUrl)}" style="color:#f4f7fa;text-decoration:underline;">Privacy</a>` : ""}</p>
                <p style="margin:12px 0 0;">To stop occasional workflow insights, reply with “unsubscribe.”</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`

  return { html: resultHtml, text: resultText }
}
