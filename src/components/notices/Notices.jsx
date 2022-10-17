import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState, useEffect } from "react";
import moment from "moment/moment";
import 'moment/locale/es';
import { getEvents } from "../../config/firebase";
const Notices = () => {
    const [eventos, setEventos] = useState([]);

    const localizer = momentLocalizer(moment)

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getEvents();
            if (response.length > 0) {
                response.forEach((doc) => {
                    let partStart = doc.start.split("-")
                    let partEnd = doc.end.split("-")
                    if (parseInt(partStart[1]) >= 12) {
                        partStart[1] = 11
                    }
                    if (parseInt(partStart[1])<= 0) {
                        partStart[1] = 1
                    }
                    if (parseInt(partEnd[1]) >= 12) {
                        partEnd[1] = 11
                    }
                    if (parseInt(partEnd[1]) <= 0) {
                        partEnd[1] = 1
                    }
                    doc.start = new Date(parseInt(partStart[0]), parseInt(partStart[1]-1), parseInt(partStart[2]))
                    doc.end = new Date(parseInt(partEnd[0]), parseInt(partEnd[1])-1, parseInt(partEnd[2]))
                });
                console.log(response)
            }
            setEventos(response);
        }

        fetchMyAPI();
    }, []);

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
                    day: "Día"
                    }} 
                    startAccessor="start" endAccessor="end"
                    style={{ height: 500, margin: "50px" }} />
            </div>
        </section>
    );
}

export default Notices;