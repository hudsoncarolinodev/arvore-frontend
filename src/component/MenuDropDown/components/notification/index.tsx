import React from "react";
import {NotificationStyled} from './style'
import {InotificatonProp} from './../../../../interface/InotificatonProp'

const Notification: React.FC<InotificatonProp> = (props:InotificatonProp) => {
    const {notify} = props
 
    return  <NotificationStyled notify={notify.toString()}/>
}
export default Notification