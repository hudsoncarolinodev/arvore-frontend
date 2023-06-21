import React, { useState } from 'react';
import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from '../style'
import Bookshelf from '../component/Bookshelf'
import { useParams } from 'react-router-dom';
import Sidebar from './../component/Sidebar'


const Category = () => {
   
    return <div className='Category'>

        <Section className='serachBar'>
            <Container>
                <SearchBar/>
            </Container>
        </Section>

        <Section>
            <Container>
                <Sidebar/>
                <Heading as="h3">Resultados para ”menino”:</Heading>
            </Container>
        </Section>
      
    </div>
}

export default Category