const gridToggle = document.querySelector(".grid-toggle");
const copyFeedback = document.querySelector(".copy-feedback");
const tokenButtons = document.querySelectorAll("[data-copy]");
const frameStatus = document.querySelector(".frame-status");
const reviewButtons = document.querySelectorAll(".review-buttons .button");

gridToggle?.addEventListener("click", () => {
  const isVisible = document.documentElement.classList.toggle("show-blueprint");
  gridToggle.setAttribute("aria-pressed", String(isVisible));
  gridToggle.setAttribute(
    "aria-label",
    isVisible ? "Hide blueprint grid" : "Show blueprint grid",
  );
});

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

tokenButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    if (!value || !copyFeedback) return;

    try {
      await copyText(value);
      copyFeedback.textContent = `${value} copied to clipboard`;
    } catch {
      copyFeedback.textContent = `Token value: ${value}`;
    }

    window.setTimeout(() => {
      copyFeedback.textContent = "";
    }, 2200);
  });
});

reviewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!frameStatus) return;

    const approved = button.classList.contains("button-primary");
    frameStatus.classList.toggle("is-approved", approved);
    frameStatus.innerHTML = approved
      ? '<i aria-hidden="true"></i> Preparation approved'
      : '<i aria-hidden="true"></i> Evidence requested';
  });
});
