import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { formatSize, Validation } from '../Helpers';

function Documentos(props) {
    const { funcion, archivos, setArchivos } = props;

    const onDrop = useCallback((acceptedFiles) => {
        var permitidos = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'application/pdf']

        acceptedFiles.forEach((file) => {
            if (!(permitidos.indexOf(file.type) > -1)) { alert("El archivo " + file.name + " no puede ser subido, debido a una extención no permitida", "error"); return; }

            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                const binaryStr = reader.result
                setArchivos(archivos => [...archivos, { name: file.name, img: binaryStr, size: file.size }])
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    async function eliminarArchivoArray(nombre) {
        const newList = archivos.filter((item) => item.nombre !== nombre);
        setArchivos(newList);
    }
    return (
        <div className="container flex justify-center justify-items-center">
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>Brindanos tu documentación</h4>
                    <hr className="mb-4" />
                    <div class="mt-1 flex justify-center mb-8 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" {...getRootProps()} className="dropzone dropzone-default dz-clickable">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                                <section >
                                    <div className="dropzone-msg dz-message needsclick">
                                        <input {...getInputProps()} accept="image/*,.doc,.docx,.xlsx,.xlx,.pdf" />
                                        <h3 className="dropzone-msg-title">Selecciona o arrastra tus evidencias aqui.</h3>
                                        <span className="dropzone-msg-desc">Solo esta permitido archivos de Imagenes (.jpg,.png) y Documentos (Word,excel,pdf)</span><br />
                                        <span className="dropzone-msg-desc">Tamaño maximo permitido por archivo es de 3 MB</span>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                    <div className="dropzone dropzone-multi" style={{ minHeight: "auto" }}>
                        <div className="dropzone-items">
                            {archivos.length >= 1 ?
                                archivos.map((archivo, index) => {
                                    return (
                                        <div className="dropzone-item dz-image-preview" key={index}>
                                            <div className="dropzone-file">
                                                <div className="dropzone-filename" title="some_image_file_name.jpg">
                                                    <span data-dz-name="">{archivo.name} </span>
                                                    <strong>(<span data-dz-size=""><strong>{formatSize(archivo.size)}</strong></span>)</strong>
                                                </div>
                                                <div className="dropzone-error" data-dz-errormessage=""></div>
                                            </div>
                                            <div className="dropzone-toolbar">
                                                <span className="dropzone-delete" data-dz-remove="" onClick={() => { eliminarArchivoArray(archivo.nombre) }}>
                                                    <i className="flaticon2-cross"></i>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                                : null}
                        </div>
                    </div>
                    <div className="flex items-end justify-between mt-6">
                        <button onClick={props.previousStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regresar
                        </button>
                        <button onClick={() => Validation("file", archivos) ? funcion() : alert("debes incluir tus la foto de tus documentos")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Enviar Solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Documentos;