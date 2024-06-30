const body = document.querySelector("body");
const checkbox = document.getElementById("checkbox");
const slider = document.getElementById("slider");
const toggle = document.querySelector(".toggle");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      slider.style.transform = "translate(40%, -0%) scale(0.7)";
      slider.style.filter = "grayscale(100%)";
      body.style.background = "#000435";
      body.style.color = "#b0c4de";
      toggle.style.borderColor = "#b0c4de";
      toggle.style.background = "#000435";
    } else {
      slider.style.transform = "translate(3px, 0px) scale(0.7)";
      slider.style.filter = "grayscale(0%)";
      body.style.background = "#b0c4de";
      body.style.color = "#000435";
      toggle.style.borderColor = "#000435";
      toggle.style.background = "#b0c4de";
    }
});
