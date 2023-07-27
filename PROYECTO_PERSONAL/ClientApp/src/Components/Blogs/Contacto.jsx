import React, { useState, useRef } from 'react'
import { Form, ButtonToolbar, Button, Input, Schema } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import InputText from '../Controls/InputText';
import InputTextArea from '../Controls/InputTextArea';
import Alertas from '../Comodines/SwalAlertas';
import { agregarSolicitud } from "../../controllers/InicioController"

const model = Schema.Model({
    nombre: Schema.Types.StringType().isRequired('Campo requerido.'),
    email: Schema.Types.StringType().isRequired("Campo requerido").isEmail('Por favor ingrese un email válido.'),
    mensaje: Schema.Types.StringType().isRequired('Campo requerido.'),
});

const Contacto = () => {
    const formRef = useRef();

    const [formValue, setFormValue] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [formError, setFormError] = useState({});


    const handleSubmit = async () => {
        if (!formRef.current.check()) return;
        Alertas.cargando(
            'Enviando mensaje...',
            'Espere un momento por favor'
        )

        const respuesta = await agregarSolicitud({
            NOMBRE: formValue.nombre,
            EMAIL: formValue.email,
            MENSAJE: formValue.mensaje,
            ESOLICITUD: 'V',
        });

        Alertas.cerrar();
        
        if (respuesta?.status === 200)
            Alertas.exito('', 'Solicitud registrada correctamente.', () => setFormValue({}))
        else
            Alertas.error('', 'No se pudo registrar la solicitud.')
    }

    return (
        <div id="contacto" className='mb-10 max-w-screen-xl md:m-auto'>
            <h3 className='text-center text-3xl font-bold mb-5'>Contácta<b style={{ color: '#7c3aed'}}>me</b></h3>
            <Grid fluid

            >
                <Row
                    className="show-grid flex flex-col lg:flex-row gap-10 justify-center items-center">
                    <Col xs={24} sm={24} md={14}>
                        <Form fluid
                            ref={formRef}
                            model={model}
                            formValue={formValue}
                            onChange={formValue => setFormValue(formValue)}
                            onCheck={formError => setFormError(formError)}
                            type="submit"
                            className='max-w-lg md:bg-gray-200 md:p-5 md:rounded-md md:mt-10'
                        >

                            <InputText value={formValue?.nombre} name="nombre" label="Nombre" error={formError?.nombre} isRequired={true} />
                            <InputText value={formValue?.email} name="email" label="Email" error={formError?.email} isRequired={true} />
                            <InputTextArea value={formValue?.mensaje} name="mensaje" label="Mensaje" error={formError?.mensaje} isRequired={true} />

                            <Form.Group>
                                <ButtonToolbar>
                                    <Button
                                        onClick={handleSubmit}
                                        style={{backgroundColor: '#8b5cf6', color: '#FFF'}}
                                    ><b>Enviar Mensaje</b></Button>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={24} sm={24} md={10}
                        className="flex justify-center items-center m-auto"
                    >
                        <object data="/contact-hand.svg" type="image/svg+xml" className="p-0 m-0" />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Contacto