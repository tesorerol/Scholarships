import React from 'react';
import { Validation } from '../Helpers';

function Reglas(props) {
    const { reglas, setReglas } = props;
    return (
        <div className="container flex justify-center justify-items-center" style={{ height: "94vh", overflow: "auto" }}>
            <div className="w-full max-w-xl ">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4 ">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>Reglas Claras</h4>
                    <hr className="mb-2" />
                    <fieldset className="mb-4">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">1) ¿Posee usted una conexión a internet estable? <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input value={reglas.q1} onChange={(e) => setReglas({ ...reglas, q1: true })} name="1" id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    si
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input value={reglas.q1} onChange={(e) => setReglas({ ...reglas, q1: false })} name="1" id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">2) El primer mes estarás a prueba y cobrarás el 30% del SLP que farmees, después que cumplas tu primer mes, tu pago sera ajustado a un 40% mensual de lo farmeado. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="2" value={reglas.q2} onChange={(e) => setReglas({ ...reglas, q2: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Entiendo que recibiré el 30% el primer mes y después del primer mes sera ajustado a un 40% mensual
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="2" value={reglas.q2} onChange={(e) => setReglas({ ...reglas, q2: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">3) Deberás de generar un minimo de 150 SLP diarios o el equivalente a 4,500 SLP mensuales, de no lograr la meta mensual solo cobraras el 50% del contrato establecido y tu beca se pondra a prueba por el siguiente mes, si el siguiente mes no cumples
                                el objetivo, tu beca sera retirada y no podras optar por otra beca, por los proximos 6 meses. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="3" value={reglas.q3} onChange={(e) => setReglas({ ...reglas, q3: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Entiendo que si no genero 4,500 SLP mensuales, solo cobrare el 50% establecido y mi beca estaria en riesgo
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="3" value={reglas.q3} onChange={(e) => setReglas({ ...reglas, q3: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">4) Los cortes se hacen los dias 30 de cada mes, el dia de pago es el dia 5 del siguiente mes Ej: (si el corte fue el 30 de Marzo el dia de pago, seria el 5 de Abril), NO DEBO de enviar mensajes de reclamo
                                a ningun administrador, a menos que llegue el dia 6, y no haya recibi mi pago. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="4" value={reglas.q4} onChange={(e) => setReglas({ ...reglas, q4: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Entiendo que el corte es el dia 30 de cada mes, y el dia de pago es el dia 5 del siguiente mes
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="4" value={reglas.q4} onChange={(e) => setReglas({ ...reglas, q4: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">5) NO PUEDES JUGAR EN MÁS DE UNA CUENTA,NO puedes tener otra cuenta ni en CryptoClub ni personal ni de nadie más o seran baneadas TODAS las cuentas del equipo. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="5" value={reglas.q5} onChange={(e) => setReglas({ ...reglas, q5: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Entiendo que si juego en MAS DE UNA CUENTA, Axie Infinity baneará las cuentas y perderemos TODO y no podre cobrar tanto yo como los otros becados de CryptoClub.
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="5" value={reglas.q5} onChange={(e) => setReglas({ ...reglas, q5: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">6) No compartiras tu dispositivo para jugar otras cuentas ni de amigos, ni de familiares. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="6" value={reglas.q6} onChange={(e) => setReglas({ ...reglas, q6: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Entiendo que sólo usuare mi dispositivo para jugar la cuenta de axie cryptoClub.
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="6" value={reglas.q6} onChange={(e) => setReglas({ ...reglas, q6: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">7) NO puedes perder juegos intencionalmente para bajar tu rating, esto sera motivo para retirar la beca de manera inmediata. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="7" value={reglas.q7} onChange={(e) => setReglas({ ...reglas, q7: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    No perderé juegos intencionalmente ya que no quiero perder mi beca.
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="7" value={reglas.q7} onChange={(e) => setReglas({ ...reglas, q7: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">8) Deberás estar activo en discord y usar tu nombre real que concuerde con tu documento de identidad, tambien me comprometo asistir a las capacitaciones y las charlas con los becados ( <a href="https://zoom.us/" target="__blank" style={{ color: "blue" }}>ZOOM</a> ). <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="8" value={reglas.q8} onChange={(e) => setReglas({ ...reglas, q8: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Me cambiare el nombre, me mantendré activo y asistire a los zoom.
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="8" value={reglas.q8} onChange={(e) => setReglas({ ...reglas, q8: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">9) Me comprometo  a jugar al menos 3 meses con la cuenta que se me asigne y dar aviso con 1 semana de anticipación si no podre trabajarla. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="9" value={reglas.q9} onChange={(e) => setReglas({ ...reglas, q9: true })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Trabajaré al menos 3 meses o avisaré
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="9" value={reglas.q9} onChange={(e) => setReglas({ ...reglas, q9: false })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="flex items-end justify-between">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={() => { Validation("reglas", reglas) ? props.nextStep() : alert("Debes llenar todos los datos requeridos") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Reglas;