import React from 'react'
import { Form } from 'rsuite';
import ErrorMessage from './ErrorMessage';

const InputText = ({
  label = "",
  error = "",
  value = "",
  name = "",
  isRequired = false,
}) => {
  return (
    <Form.Group controlId={name}
    // quitar tolpit de error
    
    
    >
      {isRequired ? (
        <div className="col-span-12">
          <Form.ControlLabel>{label}<span className="ml-3 text-red-600">*</span></Form.ControlLabel>
        </div>
      ) : (
        <div className="col-span-12">
          <Form.ControlLabel>{label}</Form.ControlLabel>
        </div>
      )}
      <div className="col-span-12">
        <Form.Control name={name} type="text" 
          style={{
            borderColor: error ? 'red' : null
          }}
          value={value}
        />
      </div>
    </Form.Group>
  )
}

export default InputText