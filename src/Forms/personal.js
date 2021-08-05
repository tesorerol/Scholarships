import React from 'react';
import Countrys from '../countrys.json';
import { Validation } from '../Helpers';
function DatosPersonales(props) {
    const { setData, dato } = props;
    return (
        <div className="container flex justify-center justify-items-center">
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>Datos Personales</h4>
                    <hr className="mb-2" />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Nombre completo (TODOS los nombres y apellidos) <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <input value={dato.fullName} onChange={(e) => setData({ ...dato, fullName: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="discord">
                            Nombre en discord ej: CryptoAxie#0000 <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <input value={dato.discord} onChange={(e) => setData({ ...dato, discord: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="discord" type="text" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Correo Electrónico <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <input value={dato.email} onChange={(e) => setData({ ...dato, email: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Fecha de Nacimiento <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <div className="grid gap-2 grid-cols-3">
                            <input onChange={(e) => setData({ ...dato, DD: e.target.value })} className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="DD" />
                            <input onChange={(e) => setData({ ...dato, MM: e.target.value })} className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="MM" />
                            <input onChange={(e) => setData({ ...dato, YY: e.target.value })} className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="YYYY" />
                        </div>
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
                            País de origen <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <div className="inline-block relative w-64">
                            <select onChange={(e) => setData({ ...dato, pais: e.target.value })} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                {Countrys.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="id">
                            ¿Alguien te refirió al programa? comparte su ID
                        </label>
                        <input value={dato.referido} onChange={(e) => setData({ ...dato, referido: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="id">
                            ¿Hay otra persona jugando axie infinity en tu mismo hogar? <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={dato.Q1} onChange={(e) => setData({ ...dato, Q1: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="id"></textarea>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="id">
                            ¿Por que es importante para ti recibir una cuenta? <span style={{ color: "red " }}>( * )</span>
                        </label>
                        <textarea value={dato.Q2} onChange={(e) => setData({ ...dato, Q2: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="id"></textarea>
                    </div>

                    <div className="flex items-end justify-end">
                        <button onClick={() => { Validation("personal", dato) ? props.nextStep() : alert("Debes llenar todos los datos requeridos") }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default DatosPersonales;