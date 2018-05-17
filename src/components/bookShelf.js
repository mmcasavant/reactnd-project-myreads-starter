import React from 'react';
import Book from './book';

function BookShelf (props) {
    const books = props.books.filter((book) => {
        return book.shelf === props.name
    });
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        return <Book book={book} />
                    })}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;