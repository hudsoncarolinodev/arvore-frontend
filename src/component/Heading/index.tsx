import { styled } from 'styled-components';

const Heading = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.Heading[`${props.as}`]};
    line-height: 100%;
    color: ${props => props.theme.colors.black};
`;
export  {Heading}