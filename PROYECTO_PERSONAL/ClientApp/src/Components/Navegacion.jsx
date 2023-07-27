import React, { useState } from "react";

const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-6">
      <div className="flex items-center justify-center w-full sm:w-auto mb-4 sm:mb-0">
        <div className="sm:hidden absolute mt-1 left-0 pl-6">
          <button
            onClick={toggleMenu}
            className="block text-black hover:text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </button>
        </div>
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          PORTAFOLIO DIGITAL
        </span>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-center w-full sm:w-auto lg:text-lg`}
      >
        <a
          href="#inicio"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4"
        >
          Inicio
        </a>
        <a
          href="#sobre-mi"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4"
        >
          Sobre mi
        </a>
        <a
          href="#proyectos"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4"
        >
          Proyectos
        </a>
        <a
          href="#servicios"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold mr-4"
        >
          Servicios
        </a>
        <a
          href="#contacto"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black hover:font-bold"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navegacion;
