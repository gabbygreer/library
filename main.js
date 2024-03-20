//  VARIABLES

const button = document.getElementById('popup-button');
const formWindow = document.getElementById('popup-div');
const form = document.getElementById('popup-form')
const myLibrary = [];

//  EVENT LISTENERS
form.addEventListener('submit', addBookToLibrary) 


//Popup form start
button.addEventListener('click', function() {
    // form.style.display = 'flex';
    formWindow.classList.toggle('form-open')
    formWindow.classList.toggle('form-closed')
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // form.style.display = 'none';
    formWindow.classList.toggle('form-open')
    formWindow.classList.toggle('form-closed')
});
// popup form end


//  book constructor function
function Book(title, author, numOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.haveRead = haveRead;
    this.info = function info() {
        return `${title} by ${author}, ${numOfPages}, ${haveRead}`
    }
}



// //container to hold book cards
// const container = document.querySelector('.card-container');

// //renders books from myLibrary to the DOM
// function renderLibrary() {
//     //loops through every element in array
//     myLibrary.forEach(book => {
//         //creating new elements and assigning them to variables
//         const div = document.createElement('div');
//         const bookTitle = document.createElement('h2');
//         const authorName = document.createElement('h4');
//         const pageCount = document.createElement('h4')
//         const alreadyRead = document.createElement('h4')

//         //adding class to newly created div container so it can be styled
//         div.classList = 'card'

//         //populating the new elements with the property values from the objects in the myLibrary array
//         bookTitle.innerText = `${book.title}`;
//         authorName.innerText = `${book.author}`;
//         pageCount.innerText = `${book.numOfPages}`;
//         alreadyRead.innerText = `${book.haveRead}`

//         //append these new elements to the new div element
//         div.appendChild(bookTitle);
//         div.appendChild(authorName);
//         div.appendChild(pageCount);
//         div.appendChild(alreadyRead);
//         //append the div element to the DOM
//         container.appendChild(div)
//     }) 
// };


//  pulls user input and creates a new Book and adds it to myLibrary array
function addBookToLibrary(event) {
    //prevents default form submit
    event.preventDefault();

    //assigning variables to the values from user input
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numOfPages = document.getElementById('numOfPages').value;
    const haveRead = document.getElementById('haveRead').value;

    //createing a new object
    const newBook = new Book(title, author, numOfPages, haveRead)
    //adds new book to myLibrary array
    return myLibrary.push(newBook);
}

// const book1 = new Book('Broken Harbor', 'French, Tana', 450, "Read")
// const book2 = new Book('Song of Solomon', 'Morrison, Toni', 337, "Read")
