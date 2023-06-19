
import {Form, Input, Button} from './style'

const SearchBar = () => {
    return (
        <Form>
            <label htmlFor="search" hidden>Search</label>
            <Input 
                placeholder='Search'
                id='search'
                name='search'
                />
            <Button>Pesquisar</Button>
        </Form>
    )
}

export default SearchBar