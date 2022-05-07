let myLibrary = [];

const Book = {
  init: function(author, title, pages, isRead){
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
    return this;
  }
}

function bookToCreate(){
  let author = prompt("author");
  let title = prompt("title");
  let pages = prompt("pages");
  let isRead = true;
  let tempBook = Object.create(Book).init(author, title, pages, isRead);
  return tempBook;
}

function addBookToLibrary(){

}

let book1 = bookToCreate();
let book2 = bookToCreate();

console.log(book1, book2);