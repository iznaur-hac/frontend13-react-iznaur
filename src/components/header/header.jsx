import Logo from "./logo";
import Menu from "./menu";

function Header() {
    return(
        <header className="header">
            <Logo/>
            <Menu/>
        </header>
    )
}

export default Header;