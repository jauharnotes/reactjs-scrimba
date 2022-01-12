import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <nav>
            <img className="nav-logo" src={Logo} alt="logo" />
            <h3 className="nav-logo_text">ReactFact</h3>
            <h4 className="nav-title">React Course - Project-1</h4>
        </nav>
    )
}