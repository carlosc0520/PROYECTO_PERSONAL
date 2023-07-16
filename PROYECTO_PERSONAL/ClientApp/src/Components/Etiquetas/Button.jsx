import React from 'react'

const Button = ({
    text = "Contactame",
    onFunction = () => { }
}) => {
    return (
        <button
            className="bg-violet-500 timeout hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => onFunction()}
        >
            {text}
        </button>
    )
}

export default Button