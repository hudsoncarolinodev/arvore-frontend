import SearchBar from '../component/SearchBar'
import ProductList from '../component/ProductList'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from './../style'

const Home = () => {
    
    return <div className='home'>

        <Section className='serachBar'>
            <Container>
                <SearchBar/>
            </Container>
        </Section>
        <Section>
            <Container>
                <Heading as="h3">Aventura</Heading>
            </Container>
            
            <ProductList />
        </Section>

        <Section>
            <Container>
                <Heading as="h3">Ação</Heading>
            </Container>
            <ProductList />
        </Section>

        <SectionFeatured>
            <Container>
                <Heading as="h3">Destaques</Heading>
            </Container>
            <ProductList />
        </SectionFeatured>

        <Section>
            <Container>
                <Heading as="h3">Infantil</Heading>
            </Container>
            <ProductList />
        </Section>
    
    </div>
}

export default Home