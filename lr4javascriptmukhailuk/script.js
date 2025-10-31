// ======================
// Завдання 1: Робота з об'єктом
// ======================

const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,

  bookInfo() {
    const readStatus = this.isRead ? "Так" : "Ні";
    return `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${readStatus}`;
  }
};

// Вивід інформації про книгу
document.getElementById("showBookInfo").addEventListener("click", () => {
  const output = document.getElementById("bookOutput");
  output.innerHTML = `<p>${book.bookInfo()}</p>`;

  // змінюємо isRead на протилежне
  book.isRead = !book.isRead;
  output.innerHTML += `<p><strong>Після зміни:</strong> ${book.bookInfo()}</p>`;
});


// ======================
// Завдання 2: Робота з масивом та об'єктами
// ======================

const library = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    isRead: true,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    isRead: false,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    isRead: false,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  }
];

function displayLibrary() {
  const output = document.getElementById("libraryOutput");
  output.innerHTML = library.map(book => `<p>${book.bookInfo()}</p>`).join("");
}

// Кнопка для показу бібліотеки
document.getElementById("showLibrary").addEventListener("click", () => {
  // Додаємо нову книгу перед показом
  library.push({
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    isRead: true,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  });
  displayLibrary();
});


// ======================
// Завдання 3: Робота з методами масивів
// ======================

document.getElementById("sortLibrary").addEventListener("click", () => {
  library.sort((a, b) => a.year - b.year);
  document.getElementById("task3Output").innerHTML = 
    "<h4>Сортування за роком:</h4>" + 
    library.map(b => `<p>${b.bookInfo()}</p>`).join("");
});

document.getElementById("showUnread").addEventListener("click", () => {
  const unreadBooks = library.filter(b => !b.isRead);
  document.getElementById("task3Output").innerHTML = 
    "<h4>Непрочитані книги:</h4>" + 
    unreadBooks.map(b => `<p>${b.bookInfo()}</p>`).join("");
});

document.getElementById("findTolkien").addEventListener("click", () => {
  const found = library.find(b => b.author === "J.R.R. Tolkien");
  document.getElementById("task3Output").innerHTML = 
    found ? `<p>Знайдено книгу: ${found.bookInfo()}</p>` : "<p>Книга не знайдена.</p>";
});


// ======================
// Завдання 4: Взаємодія з користувачем
// ======================

document.getElementById("addBookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = parseInt(document.getElementById("year").value);
  const isRead = document.getElementById("isRead").checked;

  const newBook = {
    title, author, year, isRead,
    bookInfo() {
      const readStatus = this.isRead ? "Так" : "Ні";
      return `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Прочитана: ${readStatus}`;
    }
  };

  library.push(newBook);

  document.getElementById("userOutput").innerHTML = "<h4>Оновлена бібліотека:</h4>";
  document.getElementById("userOutput").innerHTML += library.map(b => `<p>${b.bookInfo()}</p>`).join("");

  e.target.reset();
});
