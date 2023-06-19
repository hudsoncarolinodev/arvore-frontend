
import {HeaderStyled} from './style'
import Image from '../Image'
import MenuDropDown from '../MenuDropDown'
import LogoUrl from './../../assets/brand.svg'

const Header = () => {
    return (
        <HeaderStyled>
            
            <Image 
                src={LogoUrl} 
                alt="asd" 
            />
            
            <MenuDropDown/>
        </HeaderStyled>
    )
}

export default Header