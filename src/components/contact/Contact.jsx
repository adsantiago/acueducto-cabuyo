import "./contact.css"
import logo from "./../../assets/logo2.png"
const Contact = () => {
    return (
        <footer id="footer" className="text-center text-white">
            <section id="contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img src={logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top p-0" />
                        </div>
                        <div className="col-12">
                            <p className="fs-5"><b>ACUEDUCTO EL CABUYO</b></p>
                        </div>
                        <div className="col-6">
                            <p className="fs-5">Nit: 805.016. 626-0 </p>
                            <p className="fs-5">Sede: Corregimiento villa carmelo, Vereda La Fonda</p>
                        </div>
                        <div className="col-6">
                        <p className="fs-5"><i class="fa-brands fa-instagram"></i> @espelcabuyo </p>
                            <p className="fs-5 m-n1"><i class="fa-brands fa-whatsapp"></i> 3164096633</p>
                        </div>
                        <div className="col-12">
                            <p className="fs-5"><i class="fa-solid fa-envelope"></i> acuafonda@gmail.com</p>
                            <p className="fs-5"><i class="fa-solid fa-envelope"></i> espelcabuyo@gmail.com</p>
                            <p className="fs-5">ATENCIÓN AL PÚBLICO:</p>
                            <p className="fs-5">Lunes a Sábado 8 a.m a 12 p.m</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Contact;