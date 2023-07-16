import React from 'react'

const Navegacion = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-6">
      <div className="flex items-center justify-center w-full sm:w-auto mb-4 sm:mb-0">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">SYSTEM DEVCAR</span>
      </div>
      <div className="navegacion flex items-center justify-center w-full sm:w-auto">
        <a href="#inicio" className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4">
          Inicio
        </a>
        <a href="#sobre-mi" className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4">
          Sobre mi
        </a>
        <a href="#proyectos" className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4">
          Proyectos
        </a>
        <a href="#servicios" className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4">
          Servicios
        </a>
        <a href="#contacto" className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold">
          Contacto
        </a>
      </div>
    </nav>

  )
}

export default Navegacion