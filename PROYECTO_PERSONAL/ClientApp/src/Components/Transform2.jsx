import React, { useRef, useState, useEffect } from 'react';
import contenido from "../img/richard-marco.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { add, toDataURL } from 'google-fonts';

const Transform2 = () => {
    const [image, setImage] = useState(null);
    const [isImg, setIsImg] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [tamanoLetra, setTamanoLetra] = useState(35);
    const [imageSize, setImageSize] = useState({ width: 600, height: 600 });
    const canvasRef = useRef(null);

    useEffect(() => {
        // Cargar la fuente "Pacifico" desde Google Fonts
        add('Pacifico', { weights: [400], styles: ['regular'] });
    }, []);

    const base64Transform = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
            setIsImg(true);
        }

        reader.readAsDataURL(file);
    }

    const handleSizeChange = (e, dimension) => {
        const newSize = parseInt(e.target.value, 10);
        setImageSize((prevSize) => ({ ...prevSize, [dimension]: newSize }));
    };

    const handleDownload = async () => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // Dibuja la imagen subida en el lienzo
            const img = new Image();
            img.src = image;
            img.onload = () => {
                context.drawImage(img, 0, 0, imageSize.width, imageSize.height);

                // Dibuja la imagen de contenido encima
                const contenidoImg = new Image();
                contenidoImg.src = contenido;
                contenidoImg.onload = () => {
                    context.drawImage(
                        contenidoImg,
                        0,
                        0,
                        imageSize.width,
                        imageSize.height
                    );

                    // Añade el mensaje en la esquina superior con la fuente "Pacifico"
                    context.font = `${tamanoLetra}px Pacifico, sans-serif`;
                    context.fillStyle = 'white';
                    context.textAlign = 'left';
                    context.textBaseline = 'top';

                    const text = reCapitalize(mensaje);
                    context.fillText(text, 10, 10);

                    // Descarga la imagen combinada
                    const dataUrl = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'imagen.png';
                    link.click();
                };
            };
        }
    };

    const reCapitalize = (mensaje) => {
        if(mensaje.length <= 0) return '';

        const palabras = mensaje.split(' ');
        let hashTag = '#';
        palabras.forEach(palabra => {
            palabra = palabra.trim();
            hashTag += palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase() + ' ';
        });

        hashTag = hashTag.replace(/\s/g, '');

        return hashTag;
    }

    return (
        <div className='flex flex-row gap-16 container ml-10 mt-10'>
            <div className="items-center cursor-pointer" style={{ height: "56px" }}>
                <p
                    className="text-2xl font-bold text-gray-900 dark:text-black"
                >Imagen: </p>
                {!isImg ? (
                    <>
                        <label
                            className="flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Subir</span> imagen</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                            </div>

                        </label>
                    </>
                ) :
                    // <img
                    //     className="flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    //     src={image} alt="imagen"
                    // />
                    <div
                        style={{
                            position: 'relative',
                        }}
                        className='h-96 w-96 border-2 rounded-lg cursor-pointer bg-gray-50 '
                    >
                        <canvas
                            ref={canvasRef}
                            width={imageSize.width}
                            height={imageSize.height}
                            style={{ display: 'none' }}
                        />
                        <img
                            src={image}
                            alt="Uploaded"
                            style={{
                                maxWidth: '100%',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                            }}
                        />
                        <img
                            src={contenido}
                            alt="Contenido"
                            style={{
                                maxWidth: '100%',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                    </div>
                }
                <input type="file"
                    className={"mt-2 text-sm choose text-gray-900 w-96 p-5 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer "
                        + " dark:text-gray-900 focus:outline-none "
                        + "dark:bg-gray-400 dark:border-gray-400 dark:placeholder-gray-400"
                    }
                    accept="image/png, image/jpeg, image/webp"
                    onChange={(e) => base64Transform(e)}

                />
            </div>

            {/* // 2 input para cambiar el tamaño de la imagen 2 filas y 1 fila para un botton descargar
             */}
            <div className="flex flex-col justify-between mt-5">
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-bold text-gray-900 dark:text-black"
                    >Ancho: </label>
                    <input
                        type="number"
                        value={imageSize.width}
                        onChange={(e) => handleSizeChange(e, 'width')}
                        className="w-52 h-10 px-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-bold text-gray-900 dark:text-black"
                    >Alto: </label>
                    <input
                        type="number"
                        value={imageSize.height}
                        onChange={(e) => handleSizeChange(e, 'height')}
                        className="w-52 h-10 px-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        className="text-2xl font-bold text-gray-900 dark:text-black"
                    >Tamaño letra: </label>
                    <input
                        type="number"
                        value={tamanoLetra}
                        onChange={(e) => setTamanoLetra(e.target.value)}
                        className="w-52 h-10 px-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-bold text-gray-900 dark:text-black"
                    >Mensaje: </label>
                    <input
                        type="text"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        className="w-52 h-10 px-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400"
                    />
                </div>

                <button
                    onClick={handleDownload}
                    className="mt-10 w-52 h-10 px-2 text-sm text-white bg-gray-900 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-900 focus:outline-none dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400"
                >Descargar</button>
            </div>
        </div>

    )
}

export default Transform2