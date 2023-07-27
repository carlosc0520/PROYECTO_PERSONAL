import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const FooterComponente = () => {
  return (
    <footer className="relative bg-violet-100 md:mt-20 pt-8 border-t-2 border-gray-200">
      <div className="mx-auto max-w-screen-xl px-5 md:py-7 md:px-7">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Carlos Carbajal
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Contáctame en mis redes sociales
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-400 mt-8'>
            <div className="text-sm text-center text-gray-900 font-semibold py-1">
              Copyright © <span id="get-current-year">{
                new Date().getFullYear()
              }</span>
              &nbsp;Todos los derechos reservados.
            </div>
      </div>
    </footer>
  )
}

export default FooterComponente