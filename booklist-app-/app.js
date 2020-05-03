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

    static displayBooks(){
      
        const books = Store.getMyBooks();
        // iterate thru all objects in array
        books.forEach((eachBook) =>{
            // call addBooks() and pass book object
            UI.addBooks(eachBook);
        })
    }
    // get book object
    static addBooks(getBook){
        // add each book to table as row - grab table body id.
        // append a tr child to it 
        let trTag = document.getElementById("bookList").appendChild(document.createElement("tr"));
        // add innerhtml to tr tag - later access each book property
        trTag.innerHTML = `
            <td>${getBook.bookTitle}</td>
            <td>${getBook.bookAuthor}</td>
            <td>${getBook.bookISBN}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `
    }

    // get the targeted Element here
    static deleteBook(targetEl){
        // check whether element contains class called 'delete'. ie v r looking for <a>.
        if(targetEl.classList.contains("delete")){
            // then removes its parent of parentelement ie. remove tr element. so full row is deleted.
            targetEl.parentElement.parentElement.remove();
        }
    }

    static showAlerts(classType, msg){
        const getContainer = document.querySelector(".container")
        // create a row
        const createRow = document.createElement("div");
        // add classes as arguments
        createRow.classList.add("row", "mt-4");
        // create a column
        const createCol = document.createElement('div'); 
        // add classes as arguments
        createCol.classList.add("col-md-12")    
        // create alert
        const alertBox = document.createElement("p");
        // append textContent
        alertBox.textContent = msg;
        // add classes as arguments
        alertBox.classList.add("lead", "alert", classType);
        // append to col as child
        createCol.appendChild(alertBox);
        // append col to row
        createRow.appendChild(createCol);
        // append row to container as second child - use insertBefore
        getContainer.insertBefore(createRow, document.getElementById("secRow"));


        // remove alert in 3secs. use setInterval().
        // here v remove its parent of parent element.
        setInterval(()=> {
            document.querySelector('.alert').parentElement.parentElement.remove();
        }, 3000);
    }


    // clear inouts field
    static clearFields(){
        // grab each inout value
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }   

}

// Store class - store the book data in local storage.
class Store{
    static getMyBooks(){
        let bookObj;
        // if there is no book object in localStorage
        if (localStorage.getItem('bookObj') ===  null) {
            // set an array to bookObj  
            bookObj = [];
        } else {
            // get the book object -> convert json string to json object.
            bookObj = JSON.parse(localStorage.getItem('bookObj'));

        }
    // finally return the bookObj
    return bookObj;
    }

    // adding a book 
    static addMyBooks(book){
        // first get a book from localstorage.
        // invoke getmyBooks() on Store class.
        const books = Store.getMyBooks();
        // push a book to the book Array of objects.
        books.push(book);
        // store that books array to localStorage as strings
        // setItem(key, value)
        localStorage.setItem('books', JSON.stringify(books));
    }

    // removing a book - pass isbn
    static removeMyBooks(isbn){
        // first get the booksfrom Store class.
        const books = Store.getMyBooks();
        // loop thru each book
        books.forEach((eachBk, index) => {
            // whether received isbn and eachBk is same.
            if( eachBk.isbn === isbn){
                // then splice book with index
                books.splice(index, 1);
            }
        });
        // reset the localstorage 
        localStorage.getItem('books', JSON.stringify(books));
    }
}

// Events

// use DomContentLoadedevent which fires when page is loaded
// document.addEventListener("DOMContentLoaded", UI.displayBooks);


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

    // inputs r passed as arguments to Book class
    // if all inputs given - instantiate object - invoke addBooks(), else - alerts
    if (title && author && isbn) {
        // create book object
        const bookObj = new Book(title, author, isbn);
        // invoke addBooks()
        UI.addBooks(bookObj);
        // add bookObj to localStorage
        Store.addMyBooks(bookObj);
        // show alerts
        UI.showAlerts("alert-success","Book Added Successfully");        

    } else {
        // show alerts
        UI.showAlerts("alert-danger", "Please fill in all the fields");
        
    }
    // invoke clearFields function
    UI.clearFields();
})  


// remove a book
// access the tbody with table data
// call deleteBook function in UI CLASS - pass e.target as argument.
document.querySelector("#bookList").addEventListener("click",
(e) => {
    // e.target mean any element that v click inside the tbody is passed as argument to deleteBook()
    UI.deleteBook(e.target);

    // remove a book from localstorage

    // pass isbn - get parent of current event object - get its previous element - later get that elements textContent.
    Store.removeMyBooks(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlerts("alert-success", "Book Removed");
})





