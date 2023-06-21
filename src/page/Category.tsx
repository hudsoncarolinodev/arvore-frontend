import { useState, useContext, useRef, useEffect,useCallback } from 'react';
import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section} from '../style'
import BookshelfGrid from '../component/BookshelfGrid'
import Sidebar from './../component/Sidebar'
import {Button, ClearFilter} from './../style'
import {SearchResultsContext} from './../context/SearchResultsContext'
import { useParams } from 'react-router-dom';
const Category = () => {
     const divInfityScroll = useRef(null)
    const { search } = useParams();
    const { resultsFilter, searchTerm, termFilter, clearFilter, statusFilter } = useContext(SearchResultsContext);
    const [toggleStatus, setToggleStatus] = useState(false)
    const [page, setPage] = useState(10)

    const handleStatusSidebar = () => {
        setToggleStatus(!toggleStatus)
    }

    const loadMoreResults = useCallback(() => {
        setPage((oldPage) => {
            if (oldPage <= 40) {
                return oldPage + 10;
            }
            return 50;
        });
    }, []);

    const handleClearFilter = () =>{
        clearFilter()
    }
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio;
            if (ratio > 0) {
                console.log(page);
                if (page <= 40) {
                    searchTerm(termFilter, page);
                    loadMoreResults();
                }
            }
        });

        if (divInfityScroll.current) {
            intersectionObserver.observe(divInfityScroll.current);
        }

        return () => {
            intersectionObserver.disconnect();
        };
    }, [divInfityScroll, resultsFilter, page, searchTerm, termFilter, loadMoreResults]);

    useEffect(() => {
        setPage(10); 
    }, [search]);


    return <div className='Category'>

        <Section className='hidden-dektop'>
            <Container>
                <SearchBar/>
            </Container>
        </Section>

        <Section className='grid'>
            <Sidebar handleStatusSidebar={handleStatusSidebar} toggle={toggleStatus}/>
            <Container>

                <Heading as="h3">Resultados para ”{search.split('=')[1]}”:</Heading>
                <Button className='hidden-dektop' onClick={()=>handleStatusSidebar()}>FILTRAR</Button>
                {statusFilter > 0 && <ClearFilter className='buttonFilter hidden-dektop' onClick={handleClearFilter}>Limpar Filtro</ClearFilter>}
                <BookshelfGrid data={resultsFilter}/>

            </Container>
        </Section>
        <div ref={divInfityScroll}/>
    </div>
}

export default Category