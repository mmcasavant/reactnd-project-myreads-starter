import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import BookShelf from './components/bookShelf';
import * as BooksAPI from './BooksAPI';
import Book from './components/book';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
    this.getAllBooks = this.getAllBooks.bind(this);
  }
  state = {
      books: [],
      searchResults: []
  }
  componentDidMount() {
      this.getAllBooks();
  }
  changeShelf (book, shelf) {
    BooksAPI.update(book, shelf)
        .then(this.getAllBooks());
  }
  getAllBooks () {
      BooksAPI.getAll()
          .then((books) => {
              this.setState(() => ({
                  books
              }))
          }).catch((e) => console.log(e));
  }
  searchBooks(value) {
      BooksAPI.search(value)
        .then((books) => {
            this.state(() => ({
                books
            }));
        })
  }
  render() {
    return (
      <div className="app">
          <Route path='/search' render={() => (
              <div className="search-books">
                  <div className="search-books-bar">
                      <Link to='/' className='close-search'>Close</Link>
                      <div className="search-books-input-wrapper">
                          <input onKeyUp={this.searchBooks} type="text" placeholder="Search by title or author"/>
                      </div>
                  </div>
                  <div className="search-books-results">
                      <ol className="books-grid">
                          {this.state.searchResults.map((book) => (
                              <Book key="book.id" book={book} changeShelf={this.changeShelf}/>
                          ))}
                      </ol>
                  </div>
              </div>
          )} />
          <Route exact path='/' render={() => (
              <div className="list-books">
                  <div className="list-books-title">
                      <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                      <div>
                          <BookShelf name='Currently Reading' filter='currentlyReading' books={this.state.books} changeShelf={this.changeShelf} />
                          <BookShelf name='Want To Read' filter='wantToRead' books={this.state.books} changeShelf={this.changeShelf} />
                          <BookShelf name='Read' filter='read' books={this.state.books} changeShelf={this.changeShelf} />
                      </div>
                  </div>
                  <div className="open-search">
                      <Link to='/search'>Add a Book</Link>
                  </div>
              </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
