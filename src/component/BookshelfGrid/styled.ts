import { styled } from 'styled-components';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
    padding-top: 40px;
    .card{
        max-width: 124px;
        &>div{
            height: 185px;
            border-radius: 8px;
            &:after {
                content: " ";
                width: 23px;
                height: 34px;
                background-size: 23px;
                background-repeat: no-repeat;
                top: 5px;
                right: 5px;
            }
        }
        &>div img{
            height: 185px;
        }
    }
    
`;

export  {Grid}