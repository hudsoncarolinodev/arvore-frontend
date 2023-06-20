
import {HeaderStyled, HeaderContainer} from './style'
import Image from '../Image'
import MenuDropDown from '../MenuDropDown'
import LogoUrl from './../../assets/brand.svg'
import SearchBar from './../SearchBar'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderStyled>
            
                <Image 
                    src={LogoUrl} 
                    alt="asd" 
                />

                <SearchBar/>
                
                <MenuDropDown/>
            </HeaderStyled>
        </HeaderContainer>
    )
}

export default Header