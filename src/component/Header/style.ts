import { styled } from 'styled-components';

const HeaderStyled = styled.header`
    padding: 17px 22px 31px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px ${props => props.theme.colors.blue["100"]};
`;

export  {HeaderStyled}