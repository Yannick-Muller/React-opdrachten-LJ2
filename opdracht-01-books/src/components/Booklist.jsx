import { useState } from 'react'
import Book from './Book'
import './Booklist.css'
import BookCounter from './bookCounter'

const Booklist = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            titel: "Harry Potter and the Sorcerer's Stone",
            auteur: "J.K. Rowling",
            plaatje: "/images/book-1.png"
        },
        {
            id: 2,
            titel: "Fantasia VI",
            auteur: "Geronimo Stilton",
            plaatje: "/images/book-2.png"
        },
        {
            id: 3,
            titel: "The Hunger Games",
            auteur: "Suzanne Collins",
            plaatje: "/images/book-3.png"
        }
    ]);

    return (
       <>
            <BookCounter aantal={books.length} />
             <section className='boeklijst'>
            {books.map((book) => (
                <Book
                    key={book.id}
                    titel={book.titel}
                    auteur={book.auteur}
                    plaatje={book.plaatje}
                />
            ))}
        </section>
        </>
    );
}

export default Booklist;