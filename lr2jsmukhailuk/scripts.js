// ===== Лекція 1 =====
function lecture1() {
  // глобальна змінна
  let userName = "Андрій";

  if (true) {
    // локальна змінна з тим самим ім'ям
    let userName = prompt("Введіть інше ім’я:");
    console.log("Значення всередині блоку if:", userName);
  }

  console.log("Глобальне значення:", userName);

  /*
  Пояснення:
  - Всередині if створюється НОВА змінна userName (локальна).
  - Вона не змінює глобальну, тому поза блоком if видно тільки перше значення.
  */
}

// ===== Лекція 2 =====
function lecture2() {
  let name = prompt("Введіть ваше ім’я:");
  let age = prompt("Введіть ваш вік:");

  let confirmMsg = confirm(`Hello, ${name}! Your age is ${age}. Continue?`);

  if (confirmMsg) {
    alert("Welcome!");
  } else {
    alert("Goodbye!");
  }
}

// ===== Лекція 3 =====
function lecture3() {
  let number = prompt("Введіть число:");

  if (number % 2 === 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
}
