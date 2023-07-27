import React from 'react'

const Habilidades = () => {
    return (
        <div className='mb-10'>
            <h3 className='text-center text-3xl font-bold'>Mis Habilidad<b style={{ color: '#7c3aed'}}>es</b></h3>
            <div className="flex flex-col lg:flex-row gap-10 my-14">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <object data="/habilities.svg" type="image/svg+xml" className="w-96 h-72 p-10 md:p-0 m-0" />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                    <ul className="rounded overflow-hidden border">
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">EXCEL AVANZADO.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">DISEÑO GRAFICO DIGITAL BÁSICO.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">DESARROLLO WEB.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">BASES DE DATOS RELACIONALES.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">MODELAMIENTO EN BASES DE DATOS.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">MECANOGRAFÍA.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">PROGRAMAS DE OFFICE.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">CONOCIMIENTOS EN SISTEMAS OPERATIVOS WINDOWS - MacOS - Linux.</li>
                        <li className="bg-white hover:bg-gray-100 border-b border-gray-200 p-2 hover:cursor-auto text-1xl">CREACIÓN DE MAQUINAS VIRTUALES - REMOTAS (VIRTUAL BOX).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Habilidades