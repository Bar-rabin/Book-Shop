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
          <button class="update" onclick="onRemoveBook(event,'${book.id}')">Update</button>
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
