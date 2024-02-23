import React from 'react'
import { Container } from 'rsuite'
import Button from '../Etiquetas/Button'

const SobreMi = () => {

    const descargarCv = () => {
        window.open("/CV.pdf", "_blank")
    }

    const calcularEdad = (year, day, month) => {
        let fecha = new Date()
        let edad = fecha.getFullYear() - year

        if (fecha.getMonth() < month - 1) {
            edad--
        }

        if (month - 1 == fecha.getMonth() && fecha.getDate() < day) {
            edad--
        }

        return edad

    }


    return (
        <div id="sobre-mi" className='my-20 max-w-screen-xl m-auto'>
            <h3 className='text-center text-3xl font-bold'>Sobre <b style={{ color: '#7c3aed' }}>Mi</b></h3>
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <object data="/male.svg" type="image/svg+xml" className="rounded-full w-96 h-64 p-0 m-0 mt-10 md:mt-0" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <p className="mt-4 lg:mt-0 mb-1 text-justify">
                        Soy un estudiante de la carrera de Ingeniería de informática y sistemas en la Universidad
                        San Ignacio de Loyola - USIL, actualmente me encuentro en el 8vo ciclo de la carrera.

                        Me considero una persona responsable, proactiva, con facilidad para trabajar en equipo y
                        con experiencia en el rubro de desarrollo de software.

                        Me gusta aprender nuevas tecnologías y aplicarlas en mis proyectos personales, voy aprendiendo
                        a medida que voy desarrollando mis proyectos.
                    </p>
                    <Button text="Descargar CV" onFunction={descargarCv} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mt-20">
                <div className="w-full lg:w-1/2">
                    <h3 className='font-bold text-2xl'>Un poco más ....</h3>
                    <p className="mt-4 lg:mt-0 mb-1 text-justify">
                        Mis pasatiempo favoritos son jugar videojuegos, ver series y películas, escuchar música y
                        aprender nuevas tecnologías.

                        Actualmente estoy aprendiendo React, React Native, NodeJS, MongoDB, Express, Firebase, etc.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-9 md:gap-6">
                    <div className='text-xl grid grid-cols-6 items-center'>
                        <div className='flex items-center gap-x-3 col-span-full md:col-span-2'>
                            <div className='bg-gray-200 rounded-md p-2 -mb-7 md:mb-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7f5345" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <span className="font-bold">Edad:</span>
                        </div>
                        <span className='col-span-full md:col-span-4 pl-14 lg:pl-6 w-full md:-ml-10'>{calcularEdad(2001, 5, 5)} Años</span>
                    </div>
                    <div className='text-xl grid grid-cols-6 items-center'>
                        <div className='flex items-center gap-x-3 col-span-full md:col-span-2'>
                            <div className='bg-gray-200 rounded-md p-2 -mb-7 md:mb-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7f5345" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
                                    <path d="M9 15l-4.5 4.5" />
                                    <path d="M14.5 4l5.5 5.5" />
                                </svg>
                            </div>
                            <span className="font-bold">Ubicación:</span>
                        </div>
                        <span className="col-span-full md:col-span-4 pl-14 lg:pl-6 w-full md:-ml-10">Lima - Cercado de Lima</span>
                    </div>
                    <div className='text-xl grid grid-cols-6 items-center'>
                        <div className='flex items-center gap-x-3 col-span-full md:col-span-2'>
                            <div className='bg-gray-200 rounded-md p-2 -mb-7 md:mb-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#7f5345" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                                    <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                                    <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                                </svg>
                            </div>
                            <span className="font-bold">Grado A.:</span>
                        </div>
                        <span className="col-span-full md:col-span-4 pl-14 lg:pl-6 w-full md:-ml-10">Superior Universitario</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi