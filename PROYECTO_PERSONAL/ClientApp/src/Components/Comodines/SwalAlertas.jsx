import React from 'react'
import Swal from 'sweetalert2';
import estilos from "../../estilos.css";

const alertas = {
    information: (title = "", text = "", button) => {
        return (
            <div>
                {
                    Swal.fire({
                        title: title,
                        text: text,
                        icon: "info",
                        button: button,
                    })

                }
            </div>
        )
    },
    error: (title, text, buttons, functionOk = () => {}) => {
        return (
            <div>
                {
                    Swal.fire({
                        title: title,
                        text: text,
                        icon: "error",
                        buttons: buttons,
                    })
                        .then((willDelete) => {
                                functionOk();
                                alertas.cerrar();
                        })
                }
            </div>
        )
    },
    exito: (title = "", text = "", functionOk) => {
        return (
            <div>
                {
                    Swal.fire({
                        title: "",
                        text: text,
                        icon: "success",
                        button: true,
                    })
                        .then((success) => {
                            functionOk();
                            alertas.cerrar();
                        })
                }
            </div>
        )
    },
    advertencia: (title, text, buttons, dangerMode, functionOk) => {
        return (
            <div>
                {
                    Swal.fire({
                        title: title,
                        text: text,
                        icon: "warning",
                        buttons: buttons,
                        dangerMode: dangerMode,
                    })
                        .then((willDelete) => (willDelete) ? functionOk() : null)
                }
            </div>
        )
    },
    cargando: (title, text, button = false) => {
        return (
            <div>
                {
                    Swal.fire({
                        title: 'Cargando...',
                        allowOutsideClick: false,
                        html: '<div class="sk-chase">' +
                            '<div class="sk-chase-dot"></div>' +
                            '<div class="sk-chase-dot"></div>' +
                            '<div class="sk-chase-dot"></div>' +
                            '<div class="sk-chase-dot"></div>' +
                            '<div class="sk-chase-dot"></div>' +
                            '<div class="sk-chase-dot"></div>' +
                            '</div>',
                        showConfirmButton: false,                        
                    })
                }
            </div >
        )
    },
    cerrar: () => Swal.close(),
}



export default alertas