import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/axios';

const SearchResultsContext = createContext({} as SearchResultsContext);

const SearchResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [resultsFilter, setResultsFilter] = useState([]);
 
  const searchTerm = async (term = "todos") => {
    const response = await api.searchBooks(term)
  
    setResults([...response]);
    setResultsFilter([...response]);
  };

   const setFilterTerm = (termSearch) => {
    const {availability, formats, rangePrice} = termSearch
    console.log(rangePrice)
    
    const filterAvailability = results.filter((item) => {
      
      const { saleInfo, accessInfo } = item;
      
      if (availability.length > 0 && saleInfo.saleability !== availability[0]) {
        return false; 
      }
      
      if (formats.length > 0 && !accessInfo[formats[0]].isAvailable) {
        return false; 
      }

      const price = parseFloat(saleInfo.listPrice?.amount) || 0 
    
      if (rangePrice[0] === '0-30' && (price > 30 || price < 0)) {
        return false;
      }
      
      if (rangePrice[0] === '31-50' && (price <= 30 || price > 50)) {
        return false;
      }

      if (rangePrice[0] === '51-100' && (price <= 51 || price > 100)) {
        return false;
      }
      
      if (rangePrice[0] === '100' && price <= 100) {
        return false;
      }

      return true;
    });
   
    setResultsFilter([...filterAvailability])
  
  };

  useEffect(()=>{
    searchTerm()
  },[])

  return (
    <SearchResultsContext.Provider value={
        { 
          results, 
          resultsFilter,
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