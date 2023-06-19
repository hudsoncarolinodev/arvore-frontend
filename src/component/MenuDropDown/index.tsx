import React from "react";
import {MenuDropDownStyled} from './style'
import Notification from "./components/notification";
import Image from "./../../component/Image"
import Avatar from "./../../assets/Avatar.png"

const MenuDropDown: React.FC = () => {
    return  <>
        <MenuDropDownStyled>
            <div>
                <Notification notify={true} />
            </div>
            <div>

            </div>
            <div>
                <Image src={Avatar} alt="User" />
            </div>
        </MenuDropDownStyled>
    </>
}
export default MenuDropDown