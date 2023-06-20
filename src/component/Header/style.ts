import { styled } from 'styled-components';

const HeaderStyled = styled.header`
    max-width: 1680px;
    margin: 0 auto;
    padding: 17px 22px 31px;
    display: flex;
    justify-content: space-between;
   
    form{
        display: none;
    }
    @media (min-width: 768px) {
        padding: 17px 22px 22px;
        form{
            display: block;
            width: 75%;
        }
    }
`;

const HeaderContainer = styled.header`
    border-bottom: solid 2px ${props => props.theme.colors.blue["100"]};
    margin-bottom: 23px;
    @media (min-width: 768px) {
        box-shadow: 0px 4px 5px rgba(5, 59, 75, 0.06);
    }
  
`;

export  {HeaderStyled, HeaderContainer}