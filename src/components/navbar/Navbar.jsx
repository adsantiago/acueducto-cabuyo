import logo from "./../../assets/logo2.png"
import "./navbar.css"
function Navbar() {
    return (
        <nav id="Nav" class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand text-white pt-0 pb-0" href="#">
                    <img src={logo} alt="Logo" width="100" height="90" class="d-inline-block align-text-top p-0"/>
                </a>
                <span class="fs-3 text-white">Acueducto el cabuyo</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="ml-auto collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0 fs-5">
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Sobre nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Noticias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Ubicación</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-current="page" href="#">Contácto</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar