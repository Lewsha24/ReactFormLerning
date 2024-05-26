import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";


function TextInput(props) {
    return null;
}

TextInput.propTypes = {
    onChange: PropTypes.func,
    description: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.shape({})
};

function TextInputComponent () {
    let StyleInput = {
        borderRadius: '0px'
    }
    const [value, setValue] = useState({})
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(id)
    }


    const handleChange = (event) => {
        setValue((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            StyleInput :{
                borderRadius: event.target.value.radius + "px"
            }
        }))
        console.log(StyleInput)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row >
                        <Col>
                            <TextInput
                                label="Input"
                                description="Input description"
                                placeholder="Input placeholder"
                                value={value}
                                onChange={(event) => setValue(event.currentTarget.value)}
                            />
                            <input
                                type="text"
                                placeholder={value.placeholder ? value.placeholder : "Edit Input"}
                                size={value.size}
                                style={StyleInput}

                            />
                        </Col>
                        <Col>
                            <Form
                                action=""
                                onChange={handleChange}
                            >
                                <div className="edit_input_block" style={{display: "grid"}} >
                                    Placeholder
                                    <input type="text"
                                           name="placeholder"
                                           placeholder="placeholder"
                                           value={value.placeholder}
                                    />
                                    Label
                                    <input type="text"
                                           name="label"
                                           placeholder="label"
                                           value={value.label}
                                    />
                                    Description
                                    <input type="text"
                                           name="description"
                                           placeholder="description"
                                           value={value.description}
                                    />
                                    Error
                                    <input type="text"
                                           name="error"
                                           placeholder="error"
                                           value={value.error}
                                    />
                                    Radius
                                    <span>{value.radius}</span>
                                    <input type="range"
                                           name="radius"
                                           step="5"
                                           min={0}
                                           max={50}
                                           value={value.radius}
                                    />
                                    Size
                                    <span>{value.size}</span>
                                    <input type="range"
                                           name="size"
                                           step="5"
                                           min={0}
                                           max={100}
                                           value={value.size}
                                    />
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default TextInputComponent