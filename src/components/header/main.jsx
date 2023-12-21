import Logo from "./logo"
import MainText from "./main-text";
import Slider from "./slide";

function Main () {
    return(
        <div className="header">
            <div>
                <div>
                    <Logo/>
                    <p className="logo-text">Planteria</p>
                </div>
                <MainText/>
            </div>
            <Slider/>
        </div>
    )
}

export default Main;