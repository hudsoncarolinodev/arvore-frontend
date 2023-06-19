import Header from './component/Header'
import SearchBar from './component/SearchBar'
import ProductList from './component/ProductList'
import { Heading } from './component/Heading'
import {Container} from './component/Container'

function App() {

  return (
    <>
     <Header/>
     <SearchBar/>
     
     <section>
          <Container>
               <Heading as="h3">Aventura</Heading>
          </Container>
        
          <ProductList />
     </section>

     <section>
          <Container>
               <Heading as="h3">Ação</Heading>
          </Container>
          <ProductList />
     </section>

     <section>
          <Container>
               <Heading as="h3">Destaques</Heading>
          </Container>
          <ProductList />
     </section>

     <section>
          <Container>
               <Heading as="h3">Infantil</Heading>
          </Container>
          <ProductList />
     </section>
    </>
  )

}

export default App
