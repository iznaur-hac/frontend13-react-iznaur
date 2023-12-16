import FooterLogo from "./footer-logo";
import FooterList from "./footer-list";
import FooterCopyright from "./footer-copyright";

function Footer() {
    return(
        <div className="footer">
            <FooterLogo/>
            <FooterList/>
            <FooterCopyright/>
        </div>
    )
}

export default Footer;