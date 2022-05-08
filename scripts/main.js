let myLibrary = [];

const library = document.querySelector(".library");

const Book = {
  init: function(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    return this;
  }
}

function addBookToLibrary(){
  let title = prompt("title");
  let author = prompt("author");
  let pages = prompt("pages");
  let isRead = prompt("isRead");
  let tempBook = Object.create(Book).init(title, author, pages, isRead);
  myLibrary.push(tempBook);
  updateLibraryOnPage();
  return tempBook;
}

function updateLibraryOnPage(){
  library.innerHTML = "";
  myLibrary.forEach(book => {
    addBookToDOM(book.title, book.author, book.pages, book.isRead);
  });
}

function addBookToDOM(title, author, pages, read){
  let item = document.createElement("li");

  let itemTitle = document.createElement("div");
  itemTitle.className = "title";
  itemTitle.textContent = title;

  let itemAuthor = document.createElement("div");
  itemAuthor.className = "author";
  itemAuthor.textContent = author;

  let itemPages = document.createElement("div");
  itemPages.className = "pages";
  itemPages.textContent = pages;

  let isRead = document.createElement("div");
  isRead.className = "isRead";
  isRead.textContent = read;
  
  item.append(itemTitle, itemAuthor, itemPages, isRead);
  library.appendChild(item);
}

setTimeout(addBookToLibrary, 1000);
setTimeout(addBookToLibrary, 1000);