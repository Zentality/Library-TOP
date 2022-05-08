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
    addBookToLibrary(inputFields[0].value, inputFields[1].value, inputFields[2].value, inputFields[3].checked);
    inputFields.forEach(field => {
      field.value = "";
    });
    inputFields[3].checked = false;
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
function addBookToLibrary(title, author, pages, isRead){
  let tempBook = Object.create(Book).init(title, author, pages, isRead);
  myLibrary.push(tempBook);
  updateLibraryOnPage();
  return tempBook;
}
function updateLibraryOnPage(){
  library.innerHTML = "";
  myLibrary.forEach((book, i) => {
    addBookToDOM(book.title, book.author, book.pages, book.isRead, i);
    console.log(i);
  });
}
function addBookToDOM(title, author, pages, read, position){
  let item = document.createElement("li");
  
  let removeButton = document.createElement("button");
  removeButton.className = "removeBook";
  removeButton.innerHTML = `X`;
  removeButton.dataset.index = position;

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
  isRead.textContent = "Read: " + read;
  
  item.append(removeButton, itemTitle, itemAuthor, itemPages, isRead);
  library.appendChild(item);

  removeButton.addEventListener("click", (e) => {
    myLibrary.splice(e.target.dataset.index, 1);
    updateLibraryOnPage();
  })
}