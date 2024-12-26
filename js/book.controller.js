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
          <button class="read">Read</button>
          <button class="update">Update</button>
          <button class="delete">Delete</button>
        </td>
      </tr>`
  )
  document.querySelector('.book-list').innerHTML = strHTMLs.join('')
}
