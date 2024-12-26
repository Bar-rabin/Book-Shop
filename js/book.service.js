'use strict'

var gBooks = _createooks()

function _createooks() {
  var books = [
    _createBook('The adventures of Lori Ipsi', 120),
    _createBook('World Atlas', 300),
    _createBook('Zorba The Greek', 87),
  ]
  return books
}

// function getBooks() {
//   return [
//     {
//       id: 't' + parseInt(Math.random() * 1000),
//       title: 'The adventures of Lori Ipsi',
//       price: 120,
//       imgUrl: 'lori-ipsi.jpg',
//     },
//     {
//       id: 't' + parseInt(Math.random() * 1000),
//       title: 'World Atlas',
//       price: 300,
//       imgUrl: 'world-atlas.jpg',
//     },
//     {
//       id: 't' + parseInt(Math.random() * 1000),
//       title: 'Zorba The Greek',
//       price: 87,
//       imgUrl: 'zorba-the-greek.jpg',
//     },
//   ]
// }

function removeBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(bookIdx, 1)
}

function updatePrice(bookId, newPrice) {
  const book = gBooks.find((book) => book.id === bookId)
  book.price = newPrice
}

function _createBook(title, price) {
  return {
    id: 't' + parseInt(Math.random() * 1000),
    title,
    price,
    imgUrl: 'lori-ipsi.jpg',
  }
}

function addBook(title, price) {
  const book = _createBook(title, price)
  gBooks.push(book)
}
