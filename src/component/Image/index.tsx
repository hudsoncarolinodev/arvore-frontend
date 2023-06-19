import React from "react";
import {LogoStyled} from './style'
import IimageProps from '../../interface/IimageProps'

const Image: React.FC<IimageProps> = (props:IimageProps) => {
    return  <>
        <LogoStyled  {...props} />
    </>
}
export default Image