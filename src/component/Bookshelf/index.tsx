import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList';
import { api } from '../../services/axios';

const Bookshelf = ({ bookshelfId }) => {
    
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const items = await api.getBookshelves(bookshelfId);
          setBooks(items);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };

      fetchBooks();
    }, [bookshelfId]);
    
    return  <ProductList books={books} />

};
  
export default Bookshelf;