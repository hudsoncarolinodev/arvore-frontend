import React, { useState, useContext } from 'react';
import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section} from '../style'
import BookshelfGrid from '../component/BookshelfGrid'
import Sidebar from './../component/Sidebar'
import {Button} from './../style'
import {SearchResultsContext} from './../context/SearchResultsContext'
import { useParams } from 'react-router-dom';
const Category = () => {
   
    const {search} = useParams();
    
    const {resultsFilter} = useContext(SearchResultsContext);
   

    const [toggleStatus, setToggleStatus] = useState(false)
   
    const handleStatusSidebar = () =>{
       
        setToggleStatus(!toggleStatus)
    }

    return <div className='Category'>

        <Section className='hidden-dektop'>
            <Container>
                <SearchBar/>
            </Container>
        </Section>

        <Section className='grid'>
            <Sidebar handleStatusSidebar={handleStatusSidebar} toggle={toggleStatus}/>
            <Container>

                <Heading as="h3">Resultados para ”{search}”:</Heading>
                <Button className='hidden-dektop' onClick={()=>handleStatusSidebar()}>FILTRAR</Button>
                <BookshelfGrid data={resultsFilter}/>

            </Container>
        </Section>
      
    </div>
}

export default Category