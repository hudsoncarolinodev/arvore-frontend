import React, { createContext, useState } from 'react';
import { api } from '../services/axios';

const SearchResultsContext = createContext({} as SearchResultsContext);

const SearchResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
 
  const searchTerm = async (term) => {
    const response = await api.searchBooks(term)
  
    setResults([...response]);
  };

   const setFilterTerm = (termSearch) => {
   return termSearch
  };

  return (
    <SearchResultsContext.Provider value={
        { 
          results, 
          setFilterTerm,
          searchTerm,
        }
      }>
      {children}
    </SearchResultsContext.Provider>
  );
};
  
export { 
  SearchResultsProvider, 
  SearchResultsContext
};