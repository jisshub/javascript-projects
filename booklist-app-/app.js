class Book{
    // assign parameters to get the inout
    constructor(bookTitle, bookAuthor, bookISBN){
        // assign it to current object property.
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookISBN = bookISBN;
    }
}

class UI{
    // define static methods, since no object instantiation here, so use static method that depends on class.
    static removeBooks(){
        // console.log("fdsfs")
    }
    static displayBooks(){
        // define a dummy data
        // const storedData = [
        //     {
        //         title: 'Book One',
        //         author: 'John Doe',
        //         isbn: '442343'
        //     },
        //     {
        //         title: 'Book Two',
        //         author: 'John james',
        //         isbn: '442333'
        //     },
        // ]
        // const books = storedData;
        // // iterate thru all objects in array
        // books.forEach((eachBook) =>{
        //     // call addBooks() and pass book object
        //     UI.addBooks(eachBook);
        // })
    }
    // get book object
    static addBooks(getBook){
        // add each book to table as row - grab table body id.
        // append a tr child to it 
        let trTag = document.getElementById("bookList").appendChild(document.createElement("tr"));
        // add innerhtml to tr tag - access each book property
        trTag.innerHTML = `
            <td>${getBook.bookTitle}</td>
            <td>${getBook.bookAuthor}</td>
            <td>${getBook.bookISBN}</td>
            <td><a href="#" class="btn btn-danger btn-sm" id="deleteThisRow">X</a></td>
        `
    }

    // clear inouts field
    static clearFields(){
        // grab ech inout value
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }   

}


// Events

// use DomContentLoadedevent which fires when page is loaded
document.addEventListener("DOMContentLoaded", UI.displayBooks);


// Event: add a book from form inputs - submit event

// get form first
document.querySelector("#book-form").addEventListener("submit", 
(e) => {
    // prevent page refresh after submit event
    e.preventDefault();
    // get each inputs
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // once v get the inouts next instantiate a book object of Book Class.
    const bookObj = new Book(title, author, isbn);
    // inputs r passed as arguments to Book class

    // add this inputs to table - invoke addBooks() method - pass bookObj.
    UI.addBooks(bookObj);

    // invoke clearFields function
    UI.clearFields();
})  

// remove a book
document.getElementById("deleteThisRow").addEventListener("click",
(e) => {
    // prevent event bubbling to parent element
    e.stopPropagation();
    // remove the row that event object targets to.
    e.target.remove();
})



