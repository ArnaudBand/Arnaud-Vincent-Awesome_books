const form = document.querySelector('.add-book');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const bookList = document.querySelector('.book-list');

class Library {
  constructor() {
    this.collection = [];
  }

  static addCollection(newBook) {
    this.collection.push(newBook);
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static removeABook(target) {
    const removeBook = target.previousElementSibling.firstElementChild.textContent;

    this.collection.filter((book, index) => {
      if (book.title === removeBook) {
        this.collection.splice(index, 1);
      }
      return this.collection;
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }

  static getBook() {
    if (localStorage.getItem('collection') === null) {
      this.collection = [];
    } else {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    }
    return this.collection;
  }
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function UI() {}

UI.prototype.displayBook = function (newBook) {
  Library.collection.forEach((book) => {
    if (book.title === newBook.title) {
        bookList.innerHTML += `
        <div>
          <div class="books_store">
            <p>${newBook.title}</p>
            <small>&nbsp by ${newBook.author}</small>
          </div>
          <button class='remove' type='button'>Remove</button>
        </div>
        
        `;
     
    }
  });
};

UI.prototype.deleteInput = function (book1, book2) {
  book1.value = '';
  book2.value = '';
};

UI.prototype.deleteBook = function (target) {
  target.parentElement.remove();
};

const newDisplay = new UI();

function addBook(e) {
  const title = bookTitle.value;
  const author = bookAuthor.value;

  const newBook = new Book(title, author);

  Library.addCollection(newBook);

  newDisplay.displayBook(newBook);
  newDisplay.deleteInput(bookTitle, bookAuthor);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove') {
    newDisplay.deleteBook(e.target);
    Library.removeABook(e.target);

    location.reload();
  }
}

form.addEventListener('submit', addBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', () => {
  const allBooks = Library.getBook();
  allBooks.forEach((book) => newDisplay.displayBook(book));
});
