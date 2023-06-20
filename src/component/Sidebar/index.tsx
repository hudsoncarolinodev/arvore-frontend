import React, { useState } from 'react';
import { 
    Aside, 
    Form,
    Label,
    HiddenCheckbox,
    CheckboxContainer,
    Checkbox,
    FormGroup,
    Legend,
    Button
} from './style'

import { Heading } from '../Heading'

const Sidebar = () => {
    
    const [formValues, setFormValues] = useState({
        rangePrice: [],
        availability: [],
        formats: [],
    });

    const handleChange = (event) => {
       
        const { name, value, checked } = event.target;
        const updatedValues = { ...formValues };
        
       
        if (checked) {
        updatedValues[name] = [value]; 
        } else {
        updatedValues[name] = [];
        }
      
        setFormValues(updatedValues);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formValues)
    };
    
    return (
        <Aside>
            <Heading as="h2">Filtrar</Heading>
           
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
                            value="available"
                        />
                        <Checkbox/>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Label htmlFor="unavailable">Indisponível</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="unavailable" 
                            name='availability'
                            value="availability"    
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
                            value="e-pub"  
                        />
                        <Checkbox/>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <Label htmlFor="PDF">PDF</Label>
                        <HiddenCheckbox 
                            onChange={(e)=>handleChange(e)}  
                            id="PDF" 
                            name='formats'
                            value="PDF"      
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