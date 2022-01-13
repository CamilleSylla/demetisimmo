import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Nav";
import style from './navbar.module.scss'

export default function NavBar () {

    return (
        <nav  className={style.wrapper}>
            <Navigation/>
            <MobileNavigation/>
        </nav>
        
    )
}