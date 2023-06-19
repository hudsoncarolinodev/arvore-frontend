import { styled } from 'styled-components';

const Heading = styled.h2`
    font-weight: 600;
    font-size: ${props => props.theme.Heading[`${props.as}`]};
    color: ${props => props.theme.colors.black};
`;
export  {Heading}