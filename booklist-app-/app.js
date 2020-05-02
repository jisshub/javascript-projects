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
        const storedData = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '442343'
            },
            {
                title: 'Book Two',
                author: 'John james',
                isbn: '442333'
            }
        ]
        const books = storedData;
        // iterate thru all objects in array
        books.forEach((eachBook) =>{
            // call addBooks() and pass book object
            UI.addBooks(eachBook);
        })
    }
    static addBooks(getBook){
        // add each book to table as row - grab table body id.
        getTbBody = document.getElementById("bookList");
        createRow = document.createElement('tr');
        getTbBody.appendChild(createRow);
        

    }
}

// console.log(UI.displayBooks())
