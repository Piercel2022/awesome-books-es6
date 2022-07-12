export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    books = JSON.parse(window.localStorage.getItem('bookData') || '[]');

    removeBook(title) {
      this.books = JSON.parse(window.localStorage.getItem('bookData'));
      const removebook = this.books.filter((book) => book.title !== title);
      window.localStorage.setItem('bookData', JSON.stringify(removebook));
    }
}

export const displayBook = (booksCl) => {
  booksCl.books = JSON.parse(window.localStorage.getItem('bookData') || '[]');

  
  for (const book of [...Object.keys(booksCl.books)]) {
    const bookContainer = document.querySelector('.book-container');
    const element = document.createElement('div');
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.classList.add('remove');
    element.classList.add('book-list');
    element.innerHTML = `
      <div class='p-list'>
            <p class="titleBook">${booksCl.books[book].title}</p>
            <p>by ${booksCl.books[book].author}</p>
      </div>
            `;

    element.appendChild(button);
    bookContainer.appendChild(element);

    
    button.addEventListener('click', (e) => {
      const targetClass = e.target.parentElement;
      const stringTitle = targetClass.childNodes[1].childNodes[1].textContent;
      booksCl.removeBook(stringTitle);
      e.target.parentElement.remove();
    });
  }
};