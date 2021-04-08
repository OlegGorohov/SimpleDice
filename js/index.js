const getFontSize = () => {
  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;
  let fontSize;

  if (width >= height) {
    fontSize = `${(80 * height) / width}`;
  } else {
    fontSize = "80";
  }

  return fontSize + "vw";
};

const getValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const root = document.getElementById("root");

window.addEventListener("click", () => {
  root.innerHTML = getValue(1, 6);
});

window.addEventListener("resize", () => {
  root.style.fontSize = getFontSize();
});

root.style.fontSize = getFontSize();
