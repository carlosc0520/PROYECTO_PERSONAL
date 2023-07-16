import React from 'react'

const Habilidades = () => {
    return (
        <div className='mb-10'>
            <h3 className='text-center text-3xl font-bold'>Mis Habilidades</h3>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img src="/img/habilidades.webp" alt="sobre-mi" className="rounded-full w-96 h-72 p-0 m-0" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                    <ul className="list-disc list-inside">
                        <li className="text-1xl">EXCEL AVANZADO.</li>
                        <li className="text-1xl">DISEÑO GRAFICO DIGITAL BÁSICO.</li>
                        <li className="text-1xl">DESARROLLO WEB.</li>
                        <li className="text-1xl">BASES DE DATOS RELACIONALES.</li>
                        <li className="text-1xl">MODELAMIENTO EN BASES DE DATOS.</li>
                        <li className="text-1xl">MECANOGRAFÍA.</li>
                        <li className="text-1xl">PROGRAMAS DE OFFICE.</li>
                        <li className="text-1xl">CONOCIMIENTOS EN SISTEMAS OPERATIVOS WINDOWS - MacOS - Linux.</li>
                        <li className="text-1xl">CREACIÓN DE MAQUINAS VIRTUALES - REMOTAS (VIRTUAL BOX).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Habilidades