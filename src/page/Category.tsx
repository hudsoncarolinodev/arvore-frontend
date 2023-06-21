import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from '../style'
import Bookshelf from '../component/Bookshelf'
import { useParams } from 'react-router-dom';
import Sidebar from './../component/Sidebar'
import {Button} from './../style'
import { useState } from 'react'

const Category = () => {

    const [toggleStatus, setToggleStatus] = useState(false)
   
    const handleStatusSidebar = () =>{
       
        setToggleStatus(!toggleStatus)
    }

    return <div className='Category'>

        <Section className='serachBar'>
            <Container>
                <SearchBar/>
            </Container>
        </Section>

        <Section>
            <Container>
                <Sidebar handleStatusSidebar={handleStatusSidebar} toggle={toggleStatus}/>
                <Heading as="h3">Resultados para ”menino”:</Heading>
                <Button onClick={()=>handleStatusSidebar()}>FILTRAR</Button>
            </Container>
        </Section>
      


      
    
    </div>
}

export default Category