document.getElementById("btn").onclick = function () {
  const number = document.getElementById("text").value;
  const items = document.querySelectorAll("ol li");

  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "black";
  }

  if (number > 0 && number <= items.length) {
    items[number - 1].style.color = "red";
  }
};
document.getElementById("btn").addEventListener("click", function () {
  const n = parseInt(document.getElementById("text").value, 10);
  const items = document.querySelectorAll("#ol li");

  // скидаємо колір
  items.forEach(li => li.style.color = "black");

  if (!Number.isNaN(n) && n >= 1 && n <= items.length) {
    items[n - 1].style.color = "red";
  }
});
