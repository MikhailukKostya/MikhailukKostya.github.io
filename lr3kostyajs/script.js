
function startGreetingTimer(message, seconds, callback) {
  setTimeout(() => {
    alert(message);
    callback();
  }, seconds * 1000);
}

document.getElementById('startTimerBtn').addEventListener('click', () => {
  const message = document.getElementById('messageInput').value || 'Привіт!';
  const seconds = Number(document.getElementById('secondsInput').value) || 3;

  startGreetingTimer(message, seconds, () => alert('Time is up!'));
});


function calculate(a, b, operation) {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Division by zero!';
    default: return 'Invalid operation';
  }
}

function showResult() {
  const a = parseFloat(prompt('Введіть перше число:'));
  const b = parseFloat(prompt('Введіть друге число:'));
  const op = prompt('Введіть дію (+, -, *, /):');
  
  const result = calculate(a, b, op);
  alert(`Результат: ${result}`);
}

document.getElementById('calcBtn').addEventListener('click', showResult);


function createClickCounter() {
  let count = 0;
  return () => {
    count++;
    console.log(`Клік №${count}`);
  };
}

const clickCounter = createClickCounter();

document.getElementById('clickCounterBtn').addEventListener('click', clickCounter);
