import { useEffect, useState } from 'react';
import {Grid} from './styled'
import Card from '../Card';

const BookshelfGrid = ({ data }) => {
    
  const [books, setBooks] = useState([]);

  useEffect(() =>  setBooks(data), [data]);

  return <Grid>
    {books.map(({volumeInfo, saleInfo}, index)=>{
      return (
        <Card 
          title={volumeInfo.title}
          imgUrl={volumeInfo.imageLinks?.thumbnail}
          authors={volumeInfo?.authors}
          isAvailable={saleInfo.saleability}
          key={index}
        />
      )
    })}
    
  </Grid>

};
  
export default BookshelfGrid;