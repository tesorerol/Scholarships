import React, { useState } from 'react';
import Countrys from '../countrys.json';
import { Validation } from '../Helpers';
import dates from '../date.json';
import moment from 'moment-timezone';
import Countdown from "react-countdown";
function Regreso(props) {
    const { setData, dato } = props;
    const [utc] = useState(moment.tz({ year: 2021, month: 7, day: 12, hour: 6 }, "Atlantic/Azores").valueOf())
    const [day] = useState(moment(utc).add(3, 'days').valueOf())
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>You are good to go!</span>;
        } else {
            return <div class="count">
                <div id="countdown" style={{textAlign:"center"}}>
                    <ul>
                        {/* <li><span id="days">{days}</span><p style={{ paddingTop: 20 }}>{locale.locale.days}</p></li> */}
                        <li><span id="hours">{hours}</span><p>Horas</p></li>
                        <li><span id="minutes">{minutes}</span><p>Minutos</p></li>
                        <li><span id="seconds">{seconds}</span><p>Segundos</p></li>
                    </ul>
                </div>
            </div>;
        }
    };
    return (
        <div className="container flex justify-center justify-items-center " style={{ height: "100vh", overflow: "auto", position: "fixed", top: "10vh", }}>
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 overflow-y-auto">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>¡Hola futuro becario!</h4>
                    <hr className="mb-2" />
                    <p>Estamos agradecidos con la solicitud que, recibidos a cada minuto, y estamos comprometidos en que esto mejore, ¡es por ello que debemos ausentarnos un cortito tiempo para hacer mejoras de seguridad :D! gracias por tu compresión, ya regresamos.</p>
                    <img src="https://axie-scho-tracker.vercel.app/logo512.png" style={{ width: "50%", margin: "auto" }} />
                    <Countdown date={utc + (day - utc)} renderer={renderer} />
                </form>
            </div>
        </div>

    )
}
export default Regreso;