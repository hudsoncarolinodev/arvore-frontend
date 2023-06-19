import { styled } from 'styled-components';

const List = styled.div`
    overflow: hidden;
    padding-left: 22px;
    .card{
        max-width: 57px;
        &>div{
            height: 85px;
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
            height: 85px;
        }
        &>p{
            display: none;
        }
        h4{
            display: none;
        }
    }
`;

export  {List}