import React from 'react';
import { Validation } from '../Helpers';

function Psicologia(props) {
    const { psicologia, setPsicologia } = props;
    return (
        <div className="container flex justify-center justify-items-center" style={{ height: "94vh", overflow: "auto" }}>
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>Información Personal</h4>
                    <hr className="mb-2" />
                    <fieldset className="mb-4">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">1) Situación laboral. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="laboral" value={psicologia.q1} onChange={(e) => setPsicologia({ ...psicologia, q1: "emplead@" })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Emplead@
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="laboral" value={psicologia.q1} onChange={(e) => setPsicologia({ ...psicologia, q1: "desempleado@" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    Desemplead@
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="laboral" value={psicologia.q1} onChange={(e) => setPsicologia({ ...psicologia, q1: "estudiante" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    Estudiante
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            2) ¿Cuál es (o era tu empleo), o que estudias?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q2} onChange={(e) => setPsicologia({ ...psicologia, q2: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="comentanos:" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            3) ¿En tu trabao actual, o anterior, o tus estudios, en que situacion dificil te encontrastes y como la solucionastes?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q3} onChange={(e) => setPsicologia({ ...psicologia, q3: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            4) ¿Cómo conociste el juego?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q4} onChange={(e) => setPsicologia({ ...psicologia, q4: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>
                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">5) ¿Cuál sería tu dedicación diaria? (en horas). <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="time" value={psicologia.q5} onChange={(e) => setPsicologia({ ...psicologia, q5: "2 o menos" })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    2 o menos
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="time" value={psicologia.q5} onChange={(e) => setPsicologia({ ...psicologia, q5: "2 a 3 horas" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    De 2 a 3 horas
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="time" value={psicologia.q5} onChange={(e) => setPsicologia({ ...psicologia, q5: "3 a 4 horas" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    De 3 a 4 horas
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="time" value={psicologia.q5} onChange={(e) => setPsicologia({ ...psicologia, q5: "4 horas a mas" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    Mas de 4 horas
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">6) ¿Tienes conocimientos del juego? Clases, mecánicas, misiones, etc... <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="conocimiento" value={psicologia.q6} onChange={(e) => setPsicologia({ ...psicologia, q6: "si" })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Si
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="conocimiento" value={psicologia.q6} onChange={(e) => setPsicologia({ ...psicologia, q6: "no" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            7) ¿Conoces los motivos de BAN? (desarrolla): <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q7} onChange={(e) => setPsicologia({ ...psicologia, q7: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="comentanos:" />
                    </div>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">8) ¿Sabes como evitar el BAN por multi-cuenta? <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="multiban" value={psicologia.q8} onChange={(e) => setPsicologia({ ...psicologia, q8: "si" })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Si
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="multiban" value={psicologia.q8} onChange={(e) => setPsicologia({ ...psicologia, q8: "no" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">9) ¿Has jugado alguna vez? <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input name="play" value={psicologia.q9} onChange={(e) => setPsicologia({ ...psicologia, q9: "si" })} id="push-everything" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Si
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input name="play" value={psicologia.q9} onChange={(e) => setPsicologia({ ...psicologia, q9: "no" })} id="push-email" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            10) ¿Conoces gente cercana (amig@s, familiares, etc...) con experiencia, que juegue, o tenga beca?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q10} onChange={(e) => setPsicologia({ ...psicologia, q10: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            11) ¿A corto-medio plazo (unos 3-4 meses) ¿que esperas conseguir con la beca?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q11} onChange={(e) => setPsicologia({ ...psicologia, q11: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            12) ¿Por qué debería elegirte antes que a otro miembro de la comunidad?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q12} onChange={(e) => setPsicologia({ ...psicologia, q12: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            13) ¿Qué opinas de la comunidad de DISCORD?: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={psicologia.q13} onChange={(e) => setPsicologia({ ...psicologia, q13: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
                    </div>
                    <div className="flex items-end justify-between">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={() => { Validation("psicologia", psicologia) ? props.nextStep() : alert("Debes llenar todos los datos requeridos") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Psicologia;