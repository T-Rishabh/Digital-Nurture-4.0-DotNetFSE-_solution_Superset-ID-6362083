import React from 'react';

function BookDetails() {
    const books = [
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
        { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    ];

    return (
        <div>
            <h3>📚 Book List</h3>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookDetails;
