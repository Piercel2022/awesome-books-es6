
import Library,{ displayBook } from './modules/library.js';
import addBooks from './modules/addBook.js';
import * as Menu from './modules/menu.js';
import { DateTime } from './modules/luxon.js';

const titleField = document.querySelector('#titleField');
const authorField = document.querySelector('#authorField');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.querySelector('.book-container');
const notice = document.querySelector('.notice');
const time = document.querySelector('.time');

// display time
const today = DateTime.local();
const now = today.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
time.textContent = now;

// populate data on the screen
const library = new Library('', '');
displayBook(library);

// functions for nav links when clicked
Menu.displayAdd;
Menu.displayContact;
Menu.displayList;

// click event for the add button
addBtn.addEventListener('click', () => {
  if (titleField === '' || authorField.value === '') {
    notice.classList.remove('hidden');
  } else {
  library.title = titleField.value;
    library.author = authorField.value;
    addBooks(library, library);
    bookContainer.innerHTML = '';
    displayBook(library);
    titleField.value = '';
    authorField.value = '';
  }
});

// remove error message upon clicking on the form text field
document.onclick = (e) => {
  if (e.target.id === 'titleField'|| e.target.id === 'authorField'
  ) {
    notice.classList.add('hidden');
  }
};