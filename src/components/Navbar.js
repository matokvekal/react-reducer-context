import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>רשימת קריאה</h1>
            <p> you read {books.length}   books</p>

        </div>
    );
}

export default Navbar;