//  VARIABLES
const myLibrary = [];
const library = document.querySelector('.card-container')
const form = document.getElementById('popup-form')
const newBookModal = document.querySelector('#modal')
const openModal = document.querySelector('#open-button');
const closeModal = document.querySelector('#close-button');

//  Book constructor function
function Book(title, author, numOfPages, haveRead, bookIndex) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
    this.bookIndex = bookIndex;
    this.info = function info() {
        return `${title} by ${author}, ${numOfPages}, ${haveRead}`
    }
}

//adds book object to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book)
}

//renders books from myLibrary to the DOM
function renderBook(book) {
    const container = document.querySelector('.card-container'); //container to hold book cards

    const bookDiv = document.createElement('div'); //creating card div that will hold book info
    bookDiv.classList = 'book-card'; //adding class to newly created div container so it can be styled
    container.appendChild(bookDiv); //append the div element to the DOM
    
    const bookTitle = document.createElement('h2'); //creating new elements and assigning them to variables
    bookTitle.innerText = `${book.title}`; //populating the elements with the values from myLibrary
    bookDiv.appendChild(bookTitle); //append new element to the new div element

    const authorName = document.createElement('h4');
    authorName.innerText = `${book.author}`;
    bookDiv.appendChild(authorName);

    const pageCount = document.createElement('h4');
    pageCount.classList = 'numOfPages'
    pageCount.innerText = `${book.numOfPages} pages`;
    bookDiv.appendChild(pageCount);

    //  BOOK ACTIONS
    const actionContainer = document.createElement('div');
    actionContainer.classList = 'card-action-container';
    bookDiv.appendChild(actionContainer);

    //  DROPDOWN
    const bookReadContainer = document.createElement('div');
    bookReadContainer.classList = 'book-read-container'
    actionContainer.appendChild(bookReadContainer);

    const readLabel = document.createElement('label');
    readLabel.classList = 'read-label'
    readLabel.for = 'haveRead';
    readLabel.innerText = 'Read?';
    bookReadContainer.appendChild(readLabel);

    const readStatus = document.createElement('select');
    readStatus.classList = 'checkbox'
    readStatus.name = 'bookReadStatus';
    readStatus.id = 'haveRead';
    bookReadContainer.appendChild(readStatus);

    const readOption = document.createElement('option');
    readOption.innerText = 'Read'
    readOption.value = 'read';
    readStatus.appendChild(readOption);

    const unreadOption = document.createElement('option');
    unreadOption.innerText = 'To Be Read'
    unreadOption.value = 'unread';
    readStatus.appendChild(unreadOption);



    //

    //  DELETE BUTTON   
    const deleteBook = document.createElement('a');
    actionContainer.appendChild(deleteBook);

    const trashIcon = document.createElement('img');
    trashIcon.classList = 'trash'
    trashIcon.src = 'images/trash-icon.svg'
    deleteBook.appendChild(trashIcon);

    deleteBook.addEventListener('click', () => {
        let bookIndex = myLibrary.indexOf(book);
        myLibrary.splice(bookIndex, 1);
        library.removeChild(library.children[bookIndex])
    })
    //
};


function renderLibrary(book) {  //  Loops through myLibrary and runs renderBook function on each book
    for (book of myLibrary) {
        renderBook(book)
    }
}

const brokenHarbor = new Book('Broken Harbor', 'Tana French', 450, "Read", 1);
const songOfSolomon = new Book('Song of Solomon', 'Toni Morrison', 337, "Read", 2);
addBookToLibrary(brokenHarbor);
addBookToLibrary(songOfSolomon);

renderLibrary();

//  POPUP FORM
openModal.addEventListener('click', () => {
    modal.showModal();
});
closeModal.addEventListener('click', () => {
    modal.close();
});

//  SUBMIT EVENT LISTENER
form.addEventListener('submit', (e) => {
    const newBook = new Book(document.querySelector('#title').value, 
                            document.querySelector('#author').value,
                            document.querySelector('#numOfPages').value, 
                            document.querySelector('#haveRead').value,
                            document.querySelectorAll('.book-card').length + 1);

        myLibrary.push(newBook)
        e.preventDefault();  //prevents default form submit
        renderBook(newBook);
        modal.close();      
        form.reset();         
}) 

