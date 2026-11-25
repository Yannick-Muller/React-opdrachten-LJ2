import './Book.css'

const Book = ({titel, auteur, plaatje}) => {
    return ( 
        <section className='book'>
            <img src={plaatje} alt={titel} />
            <h2>{titel}</h2>
            <p>{auteur}</p>
        </section>
     );
}
 
export default Book;