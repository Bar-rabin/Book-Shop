'use strict'

function onInit() {
  renderBooks()
}

function renderBooks() {
  var strHTMLs = gBooks.map(
    (book) =>
      `
      <tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>
          <button class="read" onclick="onShowDetails('${book.id}')">Read</button>
          <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
          <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
        </td>
      </tr>`
  )
  document.querySelector('.book-list').innerHTML = strHTMLs.join('')
}

function onRemoveBook(bookId) {
  removeBook(bookId)
  renderBooks()
}

function onUpdateBook(bookId) {
  var newPrice = +prompt('Enter new price')
  updatePrice(bookId, newPrice)
  renderBooks()
}

function onAddBook() {
  var title = prompt('Enter book name')
  var price = +prompt('Enter book price')

  addBook(title, price)
  renderBooks()
}

function onShowDetails(bookId) {
  const book = getBookById(bookId)
  var strHTML = `The Book Name: ${book.title} 
  The Book Price: ${book.price} 
  <img src='${book.imgUrl}'>
    `
  document.querySelector('.book-details p').innerHTML = strHTML
  isShowDetails(book)
  //   isModalShown()
  document.querySelector('.book-details').style.opacity = 1
}

function onCloseTheModal(bookId) {
  if (gIsModalShown) document.querySelector('.book-details').style.opacity = 0
  //   isModalShown()
  isShowDetails()
}
