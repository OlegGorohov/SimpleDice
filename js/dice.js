const root = document.getElementById("root");

root.addEventListener("click", () => {
  root.innerHTML = getValue(1, 6);
});

const getValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
