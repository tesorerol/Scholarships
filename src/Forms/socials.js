import React from 'react';

function SocialData(props) {
    const { social, setSocial } = props;
    return (
        <div className="container flex justify-center justify-items-center">
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>Compartenos tus redes sociales</h4>
                    <hr className="mb-2" />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Link COMPLETO a tu cuenta de Facebook:
                        </label>
                        <input value={social.fb} onChange={(e) => setSocial({ ...social, fb: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Link COMPLETO a tu cuenta de Twitter:
                        </label>
                        <input value={social.tw} onChange={(e) => setSocial({ ...social, tw: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Link COMPLETO a tu cuenta de Instagram:
                        </label>
                        <input value={social.ig} onChange={(e) => setSocial({ ...social, ig: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Otra Red Social:
                        </label>
                        <input value={social.ot} onChange={(e) => setSocial({ ...social, ot: e.target.value.trim() })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Dar Like y suscribirte:
                        </label>
                        <a href="https://www.youtube.com/channel/UCT7TNeBaoPV9XIKF9wVQe8Q" target="_blank" style={{ color: "blue" }} >https://www.youtube.com/channel/UCT7TNeBaoPV9XIKF9wVQe8Q</a><br />
                        <a href="https://www.youtube.com/channel/UCN9j7NmmoDhIhDYSF5C4atA" target="_blank" style={{ color: "blue" }} >https://www.youtube.com/channel/UCN9j7NmmoDhIhDYSF5C4atA</a><br />
                        <a href="https://www.youtube.com/channel/UCnemqu2p35zKwplgE73X2LA" target="_blank" style={{ color: "blue" }} >https://www.youtube.com/channel/UCnemqu2p35zKwplgE73X2LA</a>
                        {/* <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Escribe tu nombre de usuario de Youtube y dime que videos viste:" /> */}
                    </div>
                    <div className="flex items-end justify-between">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={props.nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Siguiente
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default SocialData;