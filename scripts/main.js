let myLibrary = [];

//Query selectors
const library = document.querySelector(".library");
const addButton = document.querySelector(".addBook")

//Event handlers
addButton.addEventListener("click", () => {
  addBookToLibrary();
})

//Objects
const Book = {
  init: function(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    return this;
  }
}

//Functions
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
  itemTitle.textContent = "Title: " + title;

  let itemAuthor = document.createElement("div");
  itemAuthor.className = "author";
  itemAuthor.textContent = "Atuhor: " + author;

  let itemPages = document.createElement("div");
  itemPages.className = "pages";
  itemPages.textContent = "Pages: " + pages;

  let isRead = document.createElement("div");
  isRead.className = "isRead";
  isRead.textContent = read;
  
  item.append(itemTitle, itemAuthor, itemPages, isRead);
  library.appendChild(item);
}
