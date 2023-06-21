
import {HeaderStyled, HeaderContainer} from './style'
import Image from '../Image'
import MenuDropDown from '../MenuDropDown'
import LogoUrl from './../../assets/brand.svg'
import SearchBar from './../SearchBar'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderStyled>
            
                <Link to="/">
                    <Image 
                        src={LogoUrl} 
                        alt="asd" 
                    />
                </Link>

                <SearchBar/>
                
                <MenuDropDown/>
            </HeaderStyled>
        </HeaderContainer>
    )
}

export default Header