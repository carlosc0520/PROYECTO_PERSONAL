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
        <div id="proyectos" className='my-10 md:my-20'>
            <h3 className='text-center text-3xl font-bold mb-5 md:mb-14'>Mis Proyect<b style={{ color: '#7c3aed'}}>os</b></h3>
            <Carousel
                responsive={responsive(proyectosDB.length)}
                infinite={true}
                autoPlay={true}
                centerMode={document.documentElement.clientWidth > 1024 ? true : false}
                autoPlaySpeed={2000}
                focusOnSelect={true}
                className='h-auto'
                style={{"@media (min-width: 640px)": {
					gap: "300px !important",
				}}}
            >
                {proyectosDB.map((proyecto) => (
                    <div className='card-proyecto bg-white rounded-lg shadow-lg hover:shadow-xl p-4 m-6 flex flex-col gap-3 max-h-96 min-w-[300px] max-w-[400px] mx-auto overflow-hidden mr-96 md:mr-0' key={proyecto.id}
                    >
                        {/* <div
                            className='flex justify-center'
                        >
                            <img src={proyecto.img} alt={proyecto.nombre} className='rounded-lg' />
                        </div> */}
                        <iframe src={`https://${proyecto.link}`} title="Otra Página" className="card-iframe rounded overflow-hidden"></iframe>

                        <h3 className='text-center text-xl font-bold h-32 max-h-full min-h-full block'>{proyecto.nombre}</h3>
                        {/* <p className='text-center'>{proyecto.descripcion}</p> */}
                        <p className='text-center'><span>Creado el </span>{proyecto.fcreacion}</p>
                        <p className='text-center'><span>Tecnologias Usadas</span></p>
                        <div className='flex flex-wrap h-32 min-h-full justify-center gap-x-3 gap-y-2 mb-10'>
                            {proyecto.tecnologias?.map((tecnologia, index) => (
                                <span className='bg-gray-400 rounded text-white py-0.5 px-2 text-xs' key={index + 1}>{tecnologia}</span>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <a className='bg-violet-500 timeout hover:bg-violet-600 font-bold py-2 px-4 rounded hover:cursor-pointer hover:text-white text-white no-underline hover:no-underline font-bold py-2 px-4' onClick={() => window.open(`https://${proyecto.link}`, "_blank")}>Revisar Proyecto</a>
                        </div>
                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default Proyectos