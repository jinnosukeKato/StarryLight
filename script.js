let r = 255;
let g = 0;
let b = 0;

const changeBgBrightness = (value) => {
  r = (value / 100) * 255;
  console.log(`R: ${r}, G: ${g}, B: ${b}`);
  document.getElementById("background").style.backgroundColor = `rgb(${r} ${g} ${b})`;
}

changeBgBrightness(100);

document.getElementById("bright").addEventListener("input", (event) => {
  changeBgBrightness(event.target.value)
});
