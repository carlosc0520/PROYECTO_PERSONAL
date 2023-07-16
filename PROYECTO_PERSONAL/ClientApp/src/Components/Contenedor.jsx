import React, { useEffect, useState } from 'react'
import { Container, Content, Footer, Header } from "rsuite";
import HeaderComponente from './HeaderComponente';
import FooterComponente from './FooterComponente';
import SobreMi from './Blogs/SobreMi'
import Proyectos from './Blogs/Proyectos'
import Habilidades from './Blogs/Habilidades';
// import Servicios from './Blogs/Servicios';
import Contacto from './Blogs/Contacto';
import { obtenerProyectos } from "../controllers/InicioController"

const Contenedor = () => {

    const [proyectosDB, setProyectosDB] = useState([])

    useEffect(() => {
        obtenerProyectos()
            .then((result) => {
                if (result?.status == 200) {
                    setProyectosDB(
                        result.data?.map((proyecto) => {
                            return {
                                ...proyecto,
                                tecnologias: proyecto.tecnologias?.split('/'),
                                fcreacion: formatoFecha(proyecto.fcreacion)
                            }
                        })
                    );
                }
                else console.error("Ups error al cargar proyectos..");
            })
    }, [])

    const formatoFecha = (fecha) => {
        if (!fecha) return null;
        const fechaFormato = new Date(fecha);
        return `${fechaFormato.getDate()}/${fechaFormato.getMonth() + 1}/${fechaFormato.getFullYear()}`
    }

    return (
        <Container style={{
            margin: '20px 0px',
        }}>
            <Header>
                <HeaderComponente />
            </Header>
            <Content
                style={{
                    margin: '0px 40px',
                }}
            >
                <SobreMi />
                <Habilidades />
                <Proyectos proyectosDB={proyectosDB} />
                {/* <Servicios /> */}
                <Contacto />
            </Content>
            <Footer>
                <FooterComponente />
            </Footer>
        </Container>
    )
}

export default Contenedor