let myLibrary = [];

//Query selectors
const library = document.querySelector(".library");
const modal = document.querySelector("#modalContainer");
const inputFields = document.querySelectorAll(".inputField");
const addButton = document.querySelector("#addBook");
const closeModalButton = document.querySelector("#closeModal");
const submitAddBook = document.querySelector("#submitBook");

//Event handlers
addButton.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == modal){
    modal.style.display = "none";
  }
});
submitAddBook.addEventListener("click", () => {
  if (inputFields[0].value == "" || inputFields[1].value == "" || inputFields[2].value == ""){
    alert("Please fill in all fields");
  } else {
    addBookToLibrary();
    inputFields.forEach(field => {
      field.value = "";
    });
    modal.style.display = "none";
  }
  
});

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
  itemAuthor.textContent = "Author: " + author;

  let itemPages = document.createElement("div");
  itemPages.className = "pages";
  itemPages.textContent = "Pages: " + pages;

  let isRead = document.createElement("div");
  isRead.className = "isRead";
  isRead.textContent = read;
  
  item.append(itemTitle, itemAuthor, itemPages, isRead);
  library.appendChild(item);
}
