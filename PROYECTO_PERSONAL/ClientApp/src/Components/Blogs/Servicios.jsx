import React from 'react'
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Servicios = () => {

    const serviciosLocal = [
        {
            id: 1,
            descripcion: "ASESORÍA EN LA IMPLEMENTACIÓN DE SISTEMAS DE INFORMACIÓN.",
            img: "https://picsum.photos/200/300"
        },
        {
            id: 2,
            descripcion: "ASESORÍA EN LA IMPLEMENTACIÓN DE SISTEMAS DE INFORMACIÓN.",
            img: "https://picsum.photos/200/300"
        },
    ]

    const [serviciosDB, setServiciosDB] = useState(serviciosLocal)
    const responsive = (cantidadElementos) => {
        return {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 2
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
        }
    }


    return (
        <div id="servicios" className='mb-10'>
            <h3 className='text-center text-3xl font-bold'>Servicios</h3>
            <Carousel
                responsive={responsive(serviciosDB.length)}
                infinite={true}
                autoPlay={true}
                centerMode={document.documentElement.clientWidth > 1024 ? true : false}
                autoPlaySpeed={2000}
                focusOnSelect={true}
            >
                {serviciosDB.map((servicio) => (
                    <div className='card-servicio bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col gap-3' key={servicio.id}
                    >
                        <div 
                            className='flex justify-center'
                        >
                            <img src={servicio.img} alt={servicio.descripcion} className='rounded-lg' />
                        </div>
                        <h3 className='text-center text-2xl font-bold'>{servicio.descripcion}</h3>
                        <p className='text-center'>{servicio.descripcion}</p>
                        <div className='flex justify-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => 
                                window.open(servicio.img, "_blank")}>Ver</button>
                        </div>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default Servicios