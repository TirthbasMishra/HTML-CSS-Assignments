const colorsContainer = document.getElementById("colors");

const defaultColors = ["red", "blue", "green", "yellow", "purple"];

function createColorButton(color) {
  const btn = document.createElement("button");
  btn.className = "color-btn";
  btn.style.backgroundColor = color;

  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = color;
  });

  colorsContainer.appendChild(btn);
}

// Load default colors
defaultColors.forEach(createColorButton);

function addCustomColor() {
  const color = document.getElementById("colorPicker").value;
  createColorButton(color);
}
