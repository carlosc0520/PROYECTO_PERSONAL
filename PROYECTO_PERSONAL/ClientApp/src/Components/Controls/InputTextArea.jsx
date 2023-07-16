import React from 'react'
import { Form, Input } from 'rsuite';

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const InputTextArea = ({
    label = "",
    error = "",
    value = "",
    name = "",
    isRequired = false,
}) => {
    return (
        <Form.Group controlId={name}>
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
                <Form.Control rows={5} name={name} accepter={Textarea}
                    style={{
                        borderColor: error ? 'red' : null
                    }}
                    value={value}
                />
            </div>
        </Form.Group>
    )
}

export default InputTextArea