import { styled } from 'styled-components';
import SearchIncon from './../../assets/Combined-Shape.svg';

const Form = styled.form`
    width: 100%;
    height: 35px;
    background-color:${props => props.theme.colors.blue["100"]};
    border: 1px solid ${props => props.theme.colors.blue["200"]};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Input = styled.input`
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding:0 15px;
    color: ${props => props.theme.colors.blue["300"]};
    font-size: 1rem;
`;

const Button = styled.button`
   position: absolute;
   right: 10px;
   top:50%;
   transform: translateY(-50%);
   color: transparent;
   font-size: 0;
   width: 16px;
   height: 16px;
   background-color: transparent;
   background-image: url(${SearchIncon});
`;

export  {Form, Input, Button}