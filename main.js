const myLibrary = [];
const form = document.querySelector('form')

document.querySelector('#new-book-button').addEventListener('click', () => {modal.showModal();});
document.querySelector('#close-button').addEventListener('click', () => {modal.close(); form.reset()});


function Book(title, author, numOfPages, read){
        this.title = title,
        this.author = author,
        this.numOfPages = numOfPages,
        this.read = read;
    }

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(book) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const numOfPages = document.querySelector('#numOfPages').value;
    const read = document.querySelector('#bookStatus').checked;

    let newBook = new Book(title, author, numOfPages, read);

    myLibrary.push(newBook)

    renderBookCard();
}
     
function renderBookCard() {

    const container = document.querySelector('.card-container');
    container.innerHTML = ""; //prevents duplication

    myLibrary.forEach(book => {
       
        const bookCard = document.createElement('div');
        bookCard.classList = 'book-card';
        container.appendChild(bookCard); 
        
        const bookTitle = document.createElement('h2');
        bookTitle.classList = 'book-title'
        bookCard.appendChild(bookTitle);
        bookTitle.textContent = `${book.title}`; 

        const authorName = document.createElement('h4');
        authorName.classList = 'author-name'
        bookCard.appendChild(authorName); 
        authorName.textContent = `By ${book.author}`;

        const pageCount = document.createElement('h5');
        pageCount.classList = 'page-count'
        bookCard.appendChild(pageCount); 
        pageCount.textContent = `${book.numOfPages} pages`; 

        const readStatusButton = document.createElement('button');
        readStatusButton.classList = 'read-status';
        bookCard.appendChild(readStatusButton);
        if(book.read === true){
            readStatusButton.textContent = 'READ';
            readStatusButton.classList.add('read-book');
        }else{
            readStatusButton.textContent = "NOT READ"
            readStatusButton.classList.add('not-read')
        }
         readStatusButton.addEventListener('click', toggleRead);
         function toggleRead() {
            book.toggleRead();
            renderBookCard();
        } 

         const deleteBookButton = document.createElement('button');
         deleteBookButton.classList = 'delete-button';
         bookCard.appendChild(deleteBookButton);
         deleteBookButton.textContent = "DELETE"; 
         deleteBookButton.addEventListener('click', deleteBook)
     
    });
    function deleteBook(index) {
        myLibrary.splice(index, 1);
        renderBookCard();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();  
    addBookToLibrary();
    modal.close();
    form.reset();       
}) 

