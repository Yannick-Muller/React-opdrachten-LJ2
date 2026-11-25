import { useState } from 'react';
import './Book.css'

const Book = ({titel, auteur, plaatje}) => {
    const [keergelezen, setkeergelezen] = useState(0);

    const readCount = () => {
        setkeergelezen(keergelezen + 1);
    }

    return ( 
        <section className='book'>
            <img src={plaatje} alt={titel} />
            <h2>{titel}</h2>
            <p>{auteur}</p>
            <button onClick={readCount}>
                Aantal keer gelezen: {keergelezen}
            </button>
        </section>
     );
}
 
export default Book;