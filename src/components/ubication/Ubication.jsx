import "./ubication.css"

const Ubication = () => {
    return (
        <section id="ubication">
            <div className="container">
                <h1>Ubicación</h1>
                <p>Corregimiento de Villacarmelo, vereda La Fonda.</p>
                <div class="responsive-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.7078204174766!2d-76.59124927080474!3d3.391337738602071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a35f3218c7b7%3A0x984f419dbbf0930f!2sAcueducto%20El%20Cabuyo!5e0!3m2!1sen!2sco!4v1664887773278!5m2!1sen!2sco" width="920" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
}
 
export default Ubication;