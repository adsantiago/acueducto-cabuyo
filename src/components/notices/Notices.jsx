import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState, useEffect } from "react";
import moment from "moment/moment";
import 'moment/locale/es';
import { getEvents } from "../../config/firebase";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './notices.css'

const Notices = () => {
    const [eventos, setEventos] = useState([]);
    const localizer = momentLocalizer(moment)
    const [alerta, setAlerta] = useState(false);
    const [evento, setEvento] = useState([])
    const [fecha, setFecha] = useState("")
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getEvents();
            if (response.length > 0) {
                response.forEach((doc) => {
                    doc.start = new Date(doc.start)
                    doc.end = new Date(doc.end)
                });
                //console.log(response)
            }
            setEventos(response);
        }

        fetchMyAPI();
    }, []);

    function ev(event) {
        setEvento(event)
        let dia = event.start.getDate()
        let mes = event.start.getMonth()
        let anio = event.start.getFullYear()
        let horaI = event.start.toLocaleTimeString('default', {
            hour: '2-digit',
            minute: '2-digit',
        });
        let horaF = event.end.toLocaleTimeString('default', {
            hour: '2-digit',
            minute: '2-digit',
        });
        setFecha(dia + '/' + mes + '/' + anio + "    " + "(" + horaI + "/" + horaF + ")")
        setAlerta(true)
    }

    return (
        <section id="notices">
            <div className="container">
                <h1 className="text-center">Noticias</h1>
                <Calendar
                    localizer={localizer}
                    events={eventos}
                    messages={{
                        next: "sig",
                        previous: "ant",
                        today: "Hoy",
                        month: "Mes",
                        week: "Semana",
                        day: "Día",
                        date: "Fecha",
                        time: "Horario",
                        event: "Evento"
                    }}
                    startAccessor="start" endAccessor="end"
                    style={{ height: 500, margin: "50px" }}
                    onSelectEvent={event => ev(event)}
                />
            </div>
            <Modal isOpen={alerta}>
                <div className="modal-header text-white" id="modal">
                    <h5 className="modal-title fs-2">{evento.title}</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={() =>setAlerta(false)}>
                        
                    </button>
                </div>
                
                <ModalBody>
                    <p>{evento.description}</p>
                </ModalBody>
                <ModalFooter className="text-center">
                    <div className="col">
                        <p>{fecha}</p>
                    </div>
                </ModalFooter>
            </Modal>

        </section>
    );
}

export default Notices;