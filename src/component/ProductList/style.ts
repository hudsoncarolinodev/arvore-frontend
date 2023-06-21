import { styled } from 'styled-components';

const List = styled.div`
    overflow: hidden;
    padding-left: 22px;
    position: relative;
    .swiper-button-prev,
    .swiper-button-next{
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 100%;
        cursor: pointer;
        color: rgba(64, 106, 118, 1);
        &:after{
            font-size: 17px;
            font-weight: bold;
        }
        
    }
    div.swiper-slide{
        display: flex;
        justify-content: center;
    }
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
    @media (min-width: 600px) {
        .card{
        max-width: 100px;
        &>div{
            height: 140px;
            border-radius: 8px;
        }
        &>div img{
            height: 140px;
        }
    }
    }
    @media (min-width: 768px) {
            width: 100%;
            max-width: 1136px;
            margin: 0 auto;
            padding: 0 22px;
            .card{
            max-width: 198px;
            &>div{
                height: 296px;
                border-radius: 8px;
                &:after {
                    content: " ";
                    width: 51px;
                    height: 74px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    top: 20px;
                    right: 20px;
                }
            }
            &>div img{
                height: 296px;
            }
        }
    }

`;

export  {List}