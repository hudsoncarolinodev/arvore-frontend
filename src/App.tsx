import Header from './component/Header'
import {Heading} from './component/Heading'
import SearchBar from './component/SearchBar'
function App() {

  return (
    <>
     <Header/>
     <SearchBar/>
     <Heading as="h2">Aventura</Heading>
    </>
  )

}

export default App
