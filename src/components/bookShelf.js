import React from 'react';
import Book from './book';

function BookShelf (props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book />
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;