import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from '../style'
import Bookshelf from '../component/Bookshelf'
import { useParams } from 'react-router-dom';

const Category = () => {
    const {term} = useParams();
    console.log(term)
    return <div className='Category'>

        <Section className='serachBar'>
            <Container>
                <SearchBar/>
            </Container>
            
        </Section>
      
    
    </div>
}

export default Category