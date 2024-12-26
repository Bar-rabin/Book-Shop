'use strict'

var gBooks = _createooks()
var gIsModalShown = false

function _createooks() {
  var books = [
    _createBook('The adventures of Lori Ipsi', 120, 'lori-ipsi.jpg'),
    _createBook('World Atlas', 300, 'world-atlas.jpg'),
    _createBook('Zorba The Greek', 87, 'zorba-the-greek.jpg'),
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
  const book = getBookById(bookId)
  book.price = newPrice
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
  console.log(book)
}

// function isModalShown() {
//   if (!gIsModalShown) {
//     gIsModalShown = true
//   } else {
//     gIsModalShown = false
//   }
// }
