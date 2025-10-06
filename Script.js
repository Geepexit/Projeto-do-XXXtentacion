// Script de acessibilidade
(function() {
  const increaseBtn = document.getElementById("increaseText");
  const decreaseBtn = document.getElementById("decreaseText");
  const contrastBtn = document.getElementById("toggleContrast");
  const spacingBtn = document.getElementById("toggleSpacing");

  function changeFontSize(delta) {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const current = parseFloat(style.getPropertyValue("--base-font")) || 18;
    const next = Math.max(12, Math.min(28, current + delta));
    root.style.setProperty("--base-font", next + "px");
  }

  increaseBtn.addEventListener("click", () => changeFontSize(2));
  decreaseBtn.addEventListener("click", () => changeFontSize(-2));

  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });

  spacingBtn.addEventListener("click", () => {
    document.body.classList.toggle("large-spacing");
  });
})();

