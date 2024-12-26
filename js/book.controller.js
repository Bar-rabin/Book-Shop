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
          <button class="read" onclick="onRemoveBook(event,'${book.id}')">Read</button>
          <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
          <button class="delete" onclick="onRemoveBook(event,'${book.id}')">Delete</button>
        </td>
      </tr>`
  )
  document.querySelector('.book-list').innerHTML = strHTMLs.join('')
}

function onRemoveBook(ev, bookId) {
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
