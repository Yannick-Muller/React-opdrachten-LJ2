import Book from './Book'
import './Booklist.css'

const Booklist = () => {
    return ( 
        <section className='boeklijst'>
            <Book
                titel="Harry Potter and the Sorcerer's Stone"
                auteur="J.K. Rowling"
                plaatje="/images/book-1.png"
            />
            <Book
                titel="Fantasia VI"
                auteur="Geronimo Stilton"
                plaatje="/images/book-2.png"
            />
            <Book
                titel="The Hunger Games"
                auteur="Suzanne Collins"
                plaatje="/images/book-3.png"
            />
        </section>
     );
}
 
export default Booklist;