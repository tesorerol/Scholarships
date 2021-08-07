import './App.css';
import DatosPersonales from './Forms/personal';
import SocialData from './Forms/socials';
import BinanceDate from './Forms/binance';
import Reglas from './Forms/reglas';
import StepWizard from "react-step-wizard";
import Background from './bg.gif';
import { useState } from 'react';
import Home from './Home';
import Psicologia from './Forms/psicologia';
import Biografia from './Forms/biografia';
import Documentos from './Forms/documentos';
import Swal from 'sweetalert2';
import egg from './egg.png';
import axie1 from './axie1.png';
import axie2 from './axie2.png';
import axie3 from './axie3.png';
import axie4 from './axie4.png';
import axie5 from './axie5.png';
import axie6 from './axie6.png';
import axie7 from './axie7.png';
import loading from './loading.gif';
import success from './success.gif';
import Regreso from './Forms/regreso';
const Nav = (props) => {
  const dots = [];
  const axie = [
    axie1,
    axie2,
    axie3,
    axie4,
    axie5,
    axie6,
    axie7
  ]
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    dots.push((
      <span
        key={`step-${i}`}
        className={`dot ${isActive ? 'active' : ''}`}
      // onClick={() => props.goToStep(i)}
      ><img className={isActive ? 'AxieFloat' : ''} src={isActive ? axie[Math.floor(Math.random() * axie.length)] : egg} style={{ height: 30, width: isActive ? 40 : 20, display: "inherit", marginLeft: 10, marginRight: 10 }} /></span>
    ));
  }

  return (
    <div className="nav text-center mb-4">{dots}</div>
  );
};
function App(props) {
  const { socket } = props;
  const [enter, setEnter] = useState(false);
  const [archivos, setArchivos] = useState([]);
  const [data, setData] = useState({
    fullName: "",
    discord: "",
    email: "",
    DD: "",
    MM: "",
    YY: "",
    pais: "",
    referido: "",
    QP1: "",
    QP2: "",
  });
  const [social, setSocial] = useState({
    fb: "",
    tw: "",
    ig: "",
    ot: "",
  });
  const [binance, setBinance] = useState({
    emailB: "",
    aceptB: false,
  });
  const [reglas, setReglas] = useState({
    qr1: false,
    qr2: false,
    qr3: false,
    qr4: false,
    qr5: false,
    qr6: false,
    qr7: false,
    qr8: false,
    qr9: false,
  });
  const [psicologia, setPsicologia] = useState({
    qp1: false,
    qp2: "",
    qp3: "",
    qp4: "",
    qp5: false,
    qp6: false,
    qp7: "",
    qp8: false,
    qp9: false,
    qp10: "",
    qp11: "",
    qp12: "",
    qp13: "",
  });
  const [biografia, setBiografia] = useState({
    bio: "",
    aceptBio: false,
  });
  function Transition() {
    var axie = document.getElementById("axie");
    axie.classList.add("animate__zoomOut");
    setTimeout(() => {
      setEnter(true);
    }, 1500);
  }

  function SendDocument() {
    Swal.fire({
      title: 'Enviando tus datos!',
      text: 'Por favor espera, estamos registrando tu solicitud, no cieres ni reinicies esa ventada.',
      imageUrl: loading,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      allowEnterKey: false,
      allowEscapeKey: false
    })
    socket.emit("ReciveDocument", { archivos, data, social, binance, reglas, psicologia, biografia }, (res) => {
      if (res.success) {
        Swal.fire({
          title: 'Hecho!',
          text: 'se han recibido tus datos, gracias por participar.',
          imageUrl: success,
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.error == "general" ? 'Ocurrio un error, por favor intente luego!' : res.error,
        })

      }
    })

  }

  return (
    <div className="flex justify-center justify-items-center bg-fixed h-screen bg-cover overflow-hidden " style={{ backgroundImage: `url(${Background})` }}>
      {/* {enter
        ?
        <div className="animate__animated animate__zoomIn " id="form">
          <StepWizard
            nav={<Nav />}
          >
            <DatosPersonales dato={data} setData={setData} />
            <SocialData social={social} setSocial={setSocial} />
            <BinanceDate binance={binance} setBinance={setBinance} />
            <Reglas reglas={reglas} setReglas={setReglas} />
            <Psicologia psicologia={psicologia} setPsicologia={setPsicologia} />
            <Biografia biografia={biografia} setBiografia={setBiografia} />
            <Documentos archivos={archivos} setArchivos={setArchivos} funcion={SendDocument} />
          </StepWizard>
          <p className="text-center text-white-500 text-xs" style={{ color: "#fff" }}>
            &copy;2021 CryptoClub. All rights reserved.
          </p>
        </div>

        : <Home Transition={Transition} />} */}
      <Regreso />
    </div>
  );
}

export default App;
