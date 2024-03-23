const myLibrary = [];
const form = document.querySelector('#popup-form')
const openModal = document.querySelector('#open-button').addEventListener('click', () => {modal.showModal();});
const closeModal = document.querySelector('#close-button').addEventListener('click', () => {modal.close();
                                                                                            form.reset()});


class Book {
    constructor(title, author, numOfPages, read){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.read = read;
    }
    toggleRead(book) {
        this.read = !this.read
    }
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numOfPages = document.querySelector('#numOfPages');
const read = document.querySelector('#bookStatus');
    
function addBookToLibrary(book) {
    const newBook = new Book(title.value, author.value, numOfPages.value, read.checked)
    myLibrary.push(newBook)
}
    
function renderBookCard(book) {

        const container = document.querySelector('.card-container');

        const bookCard = document.createElement('div');
        bookCard.classList = 'book-card';
        container.appendChild(bookCard); 
        
        const bookTitle = document.createElement('h2');
        bookCard.appendChild(bookTitle);
        bookTitle.textContent = title.value; 

        const authorName = document.createElement('h4');
        bookCard.appendChild(authorName); 
        authorName.textContent = author.value;

        const pageCount = document.createElement('h5');
        bookCard.appendChild(pageCount); 
        pageCount.textContent = numOfPages.value; 

        const buttonContainer = document.createElement('div');
        buttonContainer.classList = 'card-actions';
        bookCard.appendChild(buttonContainer);

        const readStatusButton = document.createElement('a');
        readStatusButton.class = 'read-status';
        buttonContainer.appendChild(readStatusButton);
        if(read === false){
            readStatusButton.textContent = 'Not Read';
            readStatusButton.classList = 'not-read';
        }else {
            readStatusButton.textContent = 'Read';
            readStatusButton.classList = 'read'
        }

        const deleteBookButton = document.createElement('a');
        deleteBookButton.class = 'delete-button';
        buttonContainer.appendChild(deleteBookButton);
        deleteBookButton.textContent = "DELETE";

        // //  associates the book object and the book card
        // bookCard.dataset.index = myLibrary.indexOf(book)
       
        deleteBookButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            bookCard.remove();
        });    
};


form.addEventListener('submit', (e) => {
    e.preventDefault();  
    addBookToLibrary();
    renderBookCard();
    modal.close();
    form.reset();       
}) 

let emma = new Book('Emma', 'Jane Austen', 450, true);
myLibrary.push(emma);