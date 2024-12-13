const COLORS = Object.freeze({
  Red: [1, 0, 0],
  WarmWhite: [1, 0.75, 0.3],
})

let currentColor = COLORS.Red;

let r = 255;
let g = 0;
let b = 0;

const changeBgBrightness = (value) => {
  r = (value / 100) * 255 * currentColor[0];
  g = (value / 100) * 255 * currentColor[1];
  b = (value / 100) * 255 * currentColor[2];

  console.log(`R: ${r}, G: ${g}, B: ${b}`);
  document.getElementById("background").style.backgroundColor = `rgb(${r} ${g} ${b})`;
}

const toggleBgColor = () => {
  currentColor = currentColor === COLORS.Red ? COLORS.WarmWhite : COLORS.Red;
  changeBgBrightness(document.getElementById("bright").value);
}

changeBgBrightness(100);

document.getElementById("bright").addEventListener("input", (event) => {
  changeBgBrightness(event.target.value);
});

document.getElementById("change_color").addEventListener("click", () => toggleBgColor());
