import React from 'react';
import { Validation } from '../Helpers';

function Biografia(props) {
    const { biografia, setBiografia } = props;
    return (
        <div className="container flex justify-center justify-items-center">
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>¡Cuentanos más sobre ti!</h4>
                    <hr className="mb-2" />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            En terminos Biograficos, cuentanos mas sobre ti: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={biografia.bio} onChange={(e) => setBiografia({ ...biografia, bio: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="12" cols="6" />
                    </div>
                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">Entiendo que si mi aplicacion pasa el primer filtro, el segundo paso seria una video conferencia, donde tendre que en todo momento mostrar mi cara en vivo. <span style={{ color: "red " }}>( * )</span></legend>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input value={biografia.aceptBio} onChange={(e) => setBiografia({ ...biografia, aceptBio: true })} id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Si
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input value={biografia.aceptBio} onChange={(e) => setBiografia({ ...biografia, aceptBio: false })} id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div className="flex items-end justify-between">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={() => { Validation("bio", biografia) ? props.nextStep() : alert("Debes llenar todos los datos requeridos") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Biografia;