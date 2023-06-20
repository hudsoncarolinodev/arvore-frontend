import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Form, Input, Button} from './style'

const SearchBar = () => {
    
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
  
        navigate(`/books/search=${search}`);
    };

    return (
        <Form>
            <label htmlFor="search" hidden>Search</label>
            <Input 
                placeholder='Search'
                id='search'
                name='search'
                onChange={(e)=> handleChange(e)}
                />
            <Button onClick={(e)=>handleSubmit(e)}>Pesquisar</Button>
        </Form>
    )
}
export default SearchBar