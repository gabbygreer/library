//  VARIABLES
const myLibrary = [];
const library = document.querySelector('.card-container')
const form = document.getElementById('popup-form')
const newBookModal = document.querySelector('#modal')
const openModal = document.querySelector('#open-button');
const closeModal = document.querySelector('#close-button');

//  Book constructor function
function Book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
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

    //creating new elements and assigning them to variables
    const div = document.createElement('div');
    //adding class to newly created div container so it can be styled
    div.classList = 'card'
    const bookTitle = document.createElement('h2');
    const authorName = document.createElement('h4');
    const pageCount = document.createElement('h4')
    const alreadyRead = document.createElement('h4')
    
    
    //populating the new elements with the property values from the objects in the myLibrary array
    bookTitle.innerText = `${book.title}`;
    authorName.innerText = `${book.author}`;
    pageCount.innerText = `${book.numOfPages}`;
    alreadyRead.innerText = `${book.haveRead}`;
     
    //append these new elements to the new div element
    div.appendChild(bookTitle);
    div.appendChild(authorName);
    div.appendChild(pageCount);
    div.appendChild(alreadyRead);
    //append the div element to the DOM
    container.appendChild(div)

    //  DELETE BUTTON   
    const deleteBook = document.createElement('button');
    deleteBook.innerText = 'Delete Book';
    div.appendChild(deleteBook);
    deleteBook.addEventListener('click', () => {
        let bookIndex = myLibrary.indexOf(book);
        myLibrary.splice(bookIndex, 1);
        library.removeChild(library.children[bookIndex])
    })
};


function renderLibrary(book) {  //  Loops through myLibrary and runs renderBook function on each book
    for (book of myLibrary) {
        renderBook(book)
    }
}

const brokenHarbor = new Book('Broken Harbor', 'French, Tana', 450, "Read");
const songOfSolomon = new Book('Song of Solomon', 'Morrison, Toni', 337, "Read");
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
                            document.querySelector('#haveRead').value);
        
        myLibrary.push(newBook)
        e.preventDefault();  //prevents default form submit
        renderBook(newBook)  
        modal.close();                 
}) 

