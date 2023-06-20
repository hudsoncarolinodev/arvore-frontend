import SearchBar from '../component/SearchBar'
import { Heading } from '../component/Heading'
import {Container} from '../component/Container'
import {Section, SectionFeatured} from './../style'
import Bookshelf from '../component/Bookshelf'

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
            
            <Bookshelf bookshelfId="1001" />
        </Section>

        <Section>
            <Container>
                <Heading as="h3">Ação</Heading>
            </Container>
            <Bookshelf bookshelfId="1002" />
        </Section>

        <SectionFeatured>
            <Container>
                <Heading as="h3">Destaques</Heading>
            </Container>
            <Bookshelf bookshelfId="1003" />
        </SectionFeatured>

        <Section>
            <Container>
                <Heading as="h3">Infantil</Heading>
            </Container>
            <Bookshelf bookshelfId="1004" />
        </Section>
    
    </div>
}

export default Home