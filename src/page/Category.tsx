import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from '../style'
import Bookshelf from '../component/Bookshelf'
import { useParams } from 'react-router-dom';

const Category = () => {
    const {search} = useParams();
    console.log(search)
    return <div className='Category'>

        <Section className='serachBar'>
            <Container>
                <SearchBar/>
            </Container>
            
        </Section>
      
    
    </div>
}

export default Category