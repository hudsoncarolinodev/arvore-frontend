import { styled } from 'styled-components';
import Close from './../../assets/cancel.svg'

const Aside = styled.aside`
    background-color: ${props => props.theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    padding: 38px 16px;
    transition: .5s;
    &.close{
        left: -200%;
        transition: .5s;
    }
    @media (min-width: 768px){
		position: initial;
        height: initial;
        &>button{
            display: none;
        }
	}
`;

const Form = styled.form`
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   height: 80%;
   @media (min-width: 768px){
        height: initial
	}
 
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
const CloseSidebar = styled.button`
    background-image: url(${Close});
    width: 10px;
    height: 10px;
    display: block;
    font-size: 0;
    color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    float: right;
    background-size: 10px;
    cursor: pointer;
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
    CloseSidebar
}