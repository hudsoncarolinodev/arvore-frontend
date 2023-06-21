import { DefaultTheme,styled } from 'styled-components';
import NotificationIcon from './../../../../assets/notificationIcon.svg';

const NotificationStyled = styled.div<DefaultTheme>`
    background-image: url(${NotificationIcon});
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:after {
        content: " ";
        display: ${({ notify }) => (notify == "true" ? "block" : "none")};
        background: #FF5267;
        border: 1px solid #FFFFFF;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        float: right;
    }
`;
export  {NotificationStyled}