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

function addBookToLibrary(){
  let author = prompt("author");
  let title = prompt("title");
  let pages = prompt("pages");
  let isRead = true;
  let tempBook = Object.create(Book).init(author, title, pages, isRead);
  myLibrary.push(tempBook);
  return tempBook;
}

 

addBookToLibrary();
addBookToLibrary();

console.log(myLibrary);