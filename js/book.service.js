'use strict'

var gBooks = getBooks()

function getBooks() {
  return [
    {
      id: 't' + parseInt(Math.random() * 1000),
      title: 'The adventures of Lori Ipsi',
      price: 120,
      imgUrl: 'lori-ipsi.jpg',
    },
    {
      id: 't' + parseInt(Math.random() * 1000),
      title: 'World Atlas',
      price: 300,
      imgUrl: 'world-atlas.jpg',
    },
    {
      id: 't' + parseInt(Math.random() * 1000),
      title: 'Zorba The Greek',
      price: 87,
      imgUrl: 'zorba-the-greek.jpg',
    },
  ]
}

function removeBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId)
  gBooks.splice(bookIdx, 1)
}

function updatePrice(bookId, newPrice) {
  const book = gBooks.find((book) => book.id === bookId)
  book.price = newPrice
}
