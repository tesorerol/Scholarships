import React from 'react';
import { Validation } from '../Helpers';

function BinanceDate(props) {
    const { binance, setBinance } = props;
    return (
        <div className="container flex justify-center justify-items-center">
            <div className="w-full max-w-xl ">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>¿Donde vas a recibir tu pago?</h4>
                    <hr className="mb-2" />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Mi correo electrónico para P2P en binance: <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <input value={binance.emailB} onChange={(e) => setBinance({ ...binance, emailB: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <fieldset className="mb-2">
                        <div>
                            <legend className="block text-gray-700 text-sm font-bold mb-2">Si proporcionas mal tu cuenta no llegará dinero y no podremos recuperarlo</legend>
                        </div>
                        <div className="mt-4 space-y-4 mb-6">
                            <div className="flex items-center">
                                <input value={binance.acept} onChange={(e) => setBinance({ ...binance, acept: true })} id="push-everything" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                    Lo entiendo y será mi culpa y no culpare a CryptoClub <span style={{ color: "red " }}>( * )</span>
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input value={binance.acept} onChange={(e) => setBinance({ ...binance, acept: false })} id="push-email" name="push-notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    No estoy de acuerdo
                                </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <label for="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                    ¿No posees cuenta en Binance? Registrate <a href="https://accounts.binance.com/es/register?ref=VX3ET9Q3" target="__blank" style={{ color: "blue" }}>Aquí</a>
                                </label>
                            </div>

                        </div>
                    </fieldset>
                    <div className="flex items-end justify-between">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={() => { Validation("binance", binance) ? props.nextStep() : alert("Debes llenar todos los datos requeridos") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default BinanceDate;