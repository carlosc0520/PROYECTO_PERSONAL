import React from 'react'
import { Tooltip, Whisper } from 'rsuite';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconContacto = () => {
    const numeroDeTelefono = process.env.REACT_APP_NUMERO_DE_TELEFONO;
    const handleWhatsAppClick = () => window.open(`https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios`, "_blank");
    
    return (
        <div className="whatsapp-button">
            <Whisper
                placement="leftStart"
                speaker={
                    <Tooltip arrow={false}>
                        Escríbenos <span role="img" aria-label="happy-face">😊 .....</span>
                    </Tooltip>
                }>
                <button className="floating-button" onClick={handleWhatsAppClick}>
                    <FontAwesomeIcon icon={faWhatsapp} color="green" size="2x" />
                </button>
            </Whisper>
        </div>
    )
}

export default IconContacto