import './about.css'

const About = () => {
    return (
        <section id="about">
            <div className="container p-5">
                <h1 className='text-center pb-4'>Sobre nosotros</h1>
                <div className="container">
                    <div class="row justify-content-center">
                        <div className='col-md-4 text-center'>
                            <div className="card">
                                <div className="card-header header-bg">
                                    <h5 className="card-title text-white"><b>Misión</b></h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">El acueducto El Cabuyo presta el servicio de suministro de agua potable y alcantarillado de calidad haciendo el tratamiento adecuado, la micromedición la conservación de las microcuencas y fuentes de agua y la realización de una dirección administrativa y financiera involucrando la comunidad beneficiaria.</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                        
                        <div className="col-md-4 text-center">
                            <div className="card">
                                <div className="card-header header-bg">
                                    <h5 className="card-title text-white"><b>Visión</b></h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">El acueducto El Cabuyo en cinco (5) años será una empresa comunitaria lider en la administración, operación, mantenimiento y prestación de los servicios de agua potable y alcantarillado, promoviendo la defensa y protección de los recursos naturales con la participación activa de la comunidad usuaria y el apoyo de las entidades estatales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="pt-5 text-center">La empresa por documento privado del 29 de julio de 1999, se inscribe en la Cámara de Comercio de Cali, el 31 de enero de 2000, bajo el número 87 del libro I, se constituyó la entidad denominada "JUNTA ADMINISTRADORA DEL SERVICIO DE AGUA POTABLE Y ALCANTARILLADO EL CABUYO DE LA VEREDA LA FONDA" Sigla EL CABUYO.</p>
                </div>
            </div>
        </section>
    );
}

export default About;