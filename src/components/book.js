import React from 'react';
import { prop } from 'ramda';
import { maybe as Maybe } from 'folktale';

function Book (props) {
    const thumbnail = Maybe
        .of(props.book)
        .map(prop('imageLinks'))
        .chain(prop('thumbnail'));
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + thumbnail + ')' }}></div>
                    <div className="book-shelf-changer">
                        <select value={props.book.shelf} onChange={(e) => props.changeShelf(props.book, e.target.value)}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.author}</div>
            </div>
        </li>
    );
}

export default Book;