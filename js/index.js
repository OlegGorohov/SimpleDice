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

window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.register("sw.js");
      console.log("Service worker register success", reg);
    } catch (e) {
      console.log("Service worker register fail");
    }
  }

  const root = document.getElementById("root");

  root.style.fontSize = getFontSize();

  window.addEventListener("click", () => {
    root.innerHTML = getValue(1, 6);
  });

  window.addEventListener("resize", () => {
    root.style.fontSize = getFontSize();
  });
});
