
import React, { useState, useContext, useEffect } from 'react';
import { 
    Aside, 
    Form,
    Label,
    HiddenCheckbox,
    CheckboxContainer,
    Checkbox,
    FormGroup,
    Legend,
    CloseSidebar
} from './style'
import {Button, ClearFilter} from './../../style'

import { Heading } from '../Heading'
import { SearchResultsContext } from '../../context/SearchResultsContext';

const Sidebar = ({handleStatusSidebar, toggle}) => {
    
    const {statusFilter, setFilterTerm, clearFilter } = useContext(SearchResultsContext);

    const [formValues, setFormValues] = useState({
        rangePrice: [],
        availability: [],
        formats: [],
    })

    const handleChange = (event) => {
       
        const { name, value, checked } = event.target;
        const updatedValues = { ...formValues };
        
        if(checked) {
            updatedValues[name] = [value]; 
        }else{
            updatedValues[name] = [];
        }
       
        setFormValues(updatedValues);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setFilterTerm(formValues)
        closeSidebar()
    };
    
    const closeSidebar = () =>{
        handleStatusSidebar()
    }

    const handleClearFilter = () =>{
        clearFilter()
        handleStatusSidebar()
    }
    console.log(statusFilter)
    return (
        <Aside className={toggle?"open":"close"}>
            <CloseSidebar onClick={closeSidebar} className='close'>Close</CloseSidebar>
            <Heading as="h2">Filtrar</Heading>
            {statusFilter > 0 && <ClearFilter className='buttonFilter' onClick={handleClearFilter}>Limpar Filtro</ClearFilter>}
            <Form  onSubmit={handleSubmit}>

                <FormGroup>

                    <Legend>Preço</Legend>
                    <CheckboxContainer>
                        <Label htmlFor="rang-30" >de R$0 até R$30</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="rang-30" 
                            name='rangePrice'
                            value="0-30"
                        />
                        <Checkbox/>
                    </CheckboxContainer>
              
            
                    <CheckboxContainer>
                        <Label htmlFor="range-50">de R$31 até R$50</Label>
                        <HiddenCheckbox
                            onChange={(e)=>handleChange(e)}   
                            id="range-50" 
                            name='rangePrice'
                            value="31-50"    
                        />
                        <Checkbox/>
                    </CheckboxContainer>
                
                    <CheckboxContainer>
                        <Label htmlFor="range-100">de R$51 até R$100</Label>
                        <HiddenCheckbox 
                                onChange={(e)=>handleChange(e)}  
                                id="range-100" 
                                name='rangePrice'
                                value="51-100"
                            />
                        <Checkbox/>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Label htmlFor="range-100-mais">Mais de R$100</Label>
                        <HiddenCheckbox 
                                onChange={(e)=>handleChange(e)}  
                                id="range-100-mais" 
                                name='rangePrice'
                                value="100"
                            />
                        <Checkbox/>
                    </CheckboxContainer>
                </FormGroup>

                <FormGroup>
                    <Legend>Disponibilidade para venda</Legend>

                    <CheckboxContainer>
                        <Label htmlFor="available" >Disponível</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="available" 
                            name='availability'
                            value="FOR_SALE"
                        />
                        <Checkbox/>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Label htmlFor="unavailable">Indisponível</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="unavailable" 
                            name='availability'
                            value="NOT_FOR_SALE"    
                        />
                        <Checkbox/>
                    </CheckboxContainer>
                </FormGroup>

                <FormGroup>
                    <Legend>Formatos disponíveis</Legend>

                    <CheckboxContainer>
                        <Label htmlFor="e-pub" >e-pub</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="e-pub" 
                            name='formats'
                            value="epub"  
                        />
                        <Checkbox/>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Label htmlFor="PDF">PDF</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="PDF" 
                            name='formats'
                            value="pdf"      
                        />
                        <Checkbox/>
                    </CheckboxContainer>
                </FormGroup>

                <Button type='submit'>Filtrar agora</Button>

            </Form>
        </Aside>
    )
}
export default Sidebar