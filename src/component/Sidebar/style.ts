import { styled } from 'styled-components';

const Aside = styled.aside`
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    padding: 38px 16px;

`;

const Form = styled.form`
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   height: 90%;
 
`;

const FormGroup = styled.fieldset`
  margin-bottom: 30px;
  &:nth-last-child(2){
    flex-grow: 1;
   }
`;

const Legend = styled.legend`
    color: ${props => props.theme.colors.gray['300']};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 22px;
`;

const Label = styled.label`
    color: ${props => props.theme.colors.gren['300']};
    cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({type: 'radio'})`
   display: none;
   &:checked ~ span{
        &:after{
            display: flex;
        }
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 288px;
    height: 55px;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: ${props => props.theme.colors.purple['200']};
    color: ${props => props.theme.colors.white};
    cursor: pointer;
   
`;


const Checkbox = styled.span`
   width: 18px;
   height: 18px;
   display: block;
   border: solid 2px ${props => props.theme.colors.blue['300']};
   border-radius: 3px;
   background-color: ${props => props.theme.colors.white};
   color: #fff;
   &:after{
        content: "✓";
        display: block;
        background-color: ${props => props.theme.colors.blue['300']};
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
    }
`;

export  {
    Aside, 
    Form,
    Label,
    HiddenCheckbox,
    CheckboxContainer,
    Checkbox,
    FormGroup,
    Legend,
    Button
}