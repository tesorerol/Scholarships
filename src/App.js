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
import Sound from 'react-sound';
const Nav = (props) => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    dots.push((
      <span
        key={`step-${i}`}
        className={`dot ${isActive ? 'active' : ''}`}
      // onClick={() => props.goToStep(i)}
      >&bull;</span>
    ));
  }

  return (
    <div className="nav text-center">{dots}</div>
  );
};
function App() {
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
    Q1: "",
    Q2: "",
  });
  const [social, setSocial] = useState({
    fb: "",
    tw: "",
    ig: "",
    ot: "",
  });
  const [binance, setBinance] = useState({
    emailB: "",
    acept: false,
  });
  const [reglas, setReglas] = useState({
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
  });
  const [psicologia, setPsicologia] = useState({
    q1: false,
    q2: "",
    q3: "",
    q4: "",
    q5: false,
    q6: false,
    q7: "",
    q8: false,
    q9: false,
    q10: "",
    q11: "",
    q12: "",
    q13: "",
  });
  const [biografia, setBiografia] = useState({
    bio: "",
    acept: false,
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
      imageUrl: 'https://images.ecency.com/p/2gsjgnRrABT95uHaHpxaGYGQ74mgm3Jm7gF8hgkXipRQhsqzJYjtg82ts5rAJL57GkiBuD24XfrtXfQutCJPqJP4Pn2bvy3Eddh9mEnDTumoSKGgry.webp?format=webp&mode=fit',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  return (
    <div className="flex justify-center justify-items-center bg-fixed h-screen bg-cover overflow-hidden " style={{ backgroundImage: `url(${Background})` }}>
      {enter
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

        : <Home Transition={Transition} />}
      <Sound
        url="https://files-ralph.s3.us-east-2.amazonaws.com/bg.wav"
        playStatus={Sound.status.PLAYING}
        // playFromPosition={300 /* in milliseconds */}
        autoLoad={true}
        loop={true}
        volume={60}
      // onLoading={this.handleSongLoading}
      // onPlaying={this.handleSongPlaying}
      // onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    </div>
  );
}

export default App;
