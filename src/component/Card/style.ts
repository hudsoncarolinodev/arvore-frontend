import { styled } from 'styled-components';
import ImgPlaceHolder from './../../assets/Placeholder.svg'

const CardStyled = styled.div`
    width: 100%;
    max-width: 124px;
    margin-bottom: 30px;
   
    h4{
        margin: 9px 0;
    }
    p{
        color: ${props => props.theme.colors.gray["200"]};
        font-size: 10px;
    }
   
`;

const Covertyled = styled.div`
    height: 185px;
    box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
    border-radius: 8px 16px 16px 8px;
    background-color: ${props => props.theme.colors.gren["400"]};
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    overflow: hidden;
    &:after {
        content: " ";
        display: ${({ isImg }) => (isImg? "none" : "block")};
        background-image: url(${ImgPlaceHolder});
        width: 51px;
        height: 74px;
        float: right;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    &:before {
        content: "Sem capa";
        display: ${({ isImg }) => (isImg? "none" : "block")};
        font-weight: 600;
        font-size: 8px;
        margin-bottom: 13px;
        width: 100%;
        text-align: center;
         @media (min-width: 768px){
            font-size: 16px;
        }
    }
    img{
        width: 100%;
        height: 185px;
        object-fit: cover;
        opacity: ${({ isAvailable }) => (isAvailable? "1" : "0.5")};
    }
    p{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 2;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        color: ${props => props.theme.colors.brown};
        background: #F2F1F1;
        padding: 10px 0;
       
    }
`;

export  {CardStyled, Covertyled}