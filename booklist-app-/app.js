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

    }

    // remove alerts if it is already there
    static removeAlerts(){
        const alertBox = document.querySelector(".alert");
        if (alertBox) {
            alertBox.parentElement.parentElement.remove();
        } 
    }

    // clear inouts field
    static clearFields(){
        // grab each inout value
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

    // inputs r passed as arguments to Book class
    // if all inputs given - instantiate object - invoke addBooks(), else - alerts
    if (title && author && isbn) {
        // remove alerts if already present
        UI.removeAlerts();
        // create book object
        const bookObj = new Book(title, author, isbn);
        // invoke addBooks()
        UI.addBooks(bookObj);
        // show alerts
        UI.showAlerts("alert-success","Book Added Successfully");

        

    } else {
        // invoke removeAlerts()
        UI.removeAlerts();
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
})





