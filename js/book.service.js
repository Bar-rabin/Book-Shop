'use strict'

const STORAGE_KEY = 'bookDB'
var gBooks = _createBooks()
var gIsModalShown = false

function _createBooks() {
  var books = loadFromStorage(STORAGE_KEY)

  if (!books || !books.length) {
    books = [
      _createBook('The adventures of Lori Ipsi', 120, 'lori-ipsi.jpg'),
      _createBook('World Atlas', 300, 'world-atlas.jpg'),
      _createBook('Zorba The Greek', 87, 'zorba-the-greek.jpg'),
    ]
    _saveBooksToStorage(STORAGE_KEY, books)
  }
  return books
}

function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks)
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

  _saveBooksToStorage()
}

function updatePrice(bookId, newPrice) {
  const book = getBookById(bookId)
  book.price = newPrice
  _saveBooksToStorage()
}

function _createBook(title, price, imgUrl) {
  return {
    id: 't' + parseInt(Math.random() * 1000),
    title,
    price,
    isShowDetails: false,
    imgUrl,
  }
}

function addBook(title, price) {
  const book = _createBook(title, price)
  gBooks.push(book)

  _saveBooksToStorage()
}

function getBookById(bookId) {
  const book = gBooks.find((book) => book.id === bookId)
  return book
}

function isShowDetails(book) {
  console.log(gIsModalShown)

  if (!gIsModalShown) {
    gIsModalShown = true
    book.isShowDetails = true
  } else {
    gIsModalShown = false
    book.isShowDetails = false
  }
}

// function isModalShown() {
//   if (!gIsModalShown) {
//     gIsModalShown = true
//   } else {
//     gIsModalShown = false
//   }
// }
