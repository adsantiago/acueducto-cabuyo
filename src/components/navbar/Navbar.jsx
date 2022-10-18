import logo from "./../../assets/logo2.png"
import "./navbar.css"
function Navbar() {
    return (
        <nav id="Nav" className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand text-white pt-0 pb-0" href="#">
                    <img src={logo} alt="Logo" width="100" height="90" class="d-inline-block align-text-top p-0"/>
                </a>
                <span className="fs-3 text-white">Acueducto el cabuyo</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="ml-auto collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#notices">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#ubication">Ubicación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#about">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#contact">Contácto</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar