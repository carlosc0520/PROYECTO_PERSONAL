import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Proyectos = ({
    proyectosDB
}) => {

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
        <div id="proyectos" className='mb-10'>
            <h3 className='text-center text-3xl font-bold mb-5'>Proyectos</h3>
            <Carousel
                responsive={responsive(proyectosDB.length)}
                infinite={true}
                autoPlay={true}
                centerMode={document.documentElement.clientWidth > 1024 ? true : false}
                autoPlaySpeed={2000}
                focusOnSelect={true}
            >
                {proyectosDB.map((proyecto) => (
                    <div className='card-proyecto bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col gap-3' key={proyecto.id}
                    >
                        {/* <div
                            className='flex justify-center'
                        >
                            <img src={proyecto.img} alt={proyecto.nombre} className='rounded-lg' />
                        </div> */}
                        <iframe src={`https://${proyecto.link}`} title="Otra Página" className="card-iframe"></iframe>

                        <h3 className='text-center text-2xl font-bold'>{proyecto.nombre}</h3>
                        {/* <p className='text-center'>{proyecto.descripcion}</p> */}
                        <p className='text-center'><span>Fecha Creción:</span>{proyecto.fcreacion}</p>
                        <p className='text-center'><span>Tecnologias:</span></p>
                        <ul>
                            {proyecto.tecnologias?.map((tecnologia, index) => (
                                <li key={index + 1}>- {tecnologia}</li>
                            ))}
                        </ul>
                        <div className='flex justify-center'>
                            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => window.open(`https://${proyecto.link}`, "_blank")}>Ir a</a>
                        </div>
                    </div>
                ))}

            </Carousel>;
        </div>
    )
}

export default Proyectos