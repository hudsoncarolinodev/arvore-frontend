
import {HeaderStyled} from './style'
import Image from '../Image'
import MenuDropDown from '../MenuDropDown'
import LogoUrl from './../../assets/brand.svg'
import SearchBar from './../SearchBar'

const Header = () => {
    return (
        <HeaderStyled>
            
            <Image 
                src={LogoUrl} 
                alt="asd" 
            />

            {/* <SearchBar/> */}
            
            <MenuDropDown/>
        </HeaderStyled>
    )
}

export default Header