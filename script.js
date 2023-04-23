const swapperButton = document.querySelector(".swapper");
const swapperContainer = document.querySelector(".swapper-container");

swapperButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let currentRotation =
    +getComputedStyle(swapperContainer).getPropertyValue("--rotation");
  swapperContainer.style.setProperty("--rotation", currentRotation + 180);
});
