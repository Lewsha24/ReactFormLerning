import React, {useLayoutEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function TextInputComponent () {

    const [value, setValue] = useState({})
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(id)
    }


    const handleChange = (event) => {
        // Вообще так нельзя делать, так как я каждый раз делаю рендер переменных
        let testInput = document.querySelector('.test_input');
        let label = document.querySelector('.label');
        let description = document.querySelector('.description');
        let error = document.querySelector('.error');

        setValue((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        } ) )
        testInput.style.borderRadius = event.target.value+"px"
        if(event.target.name == 'label') {
            label.textContent = event.target.value
        }
        if(event.target.name == 'description') {
            description.textContent = event.target.value
        }
        if(event.target.name == 'error') {
            error.style.display = 'block';
            error.textContent = event.target.value
            if(event.target.value === '') {
                error.style.display = 'none';
            }
        }

    }

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row >
                        <Col>
                           <span
                               className="label"
                           >
                           </span>
                            <br/><p
                            className="description"
                            >
                           </p>
                            <br/>
                            <input
                                className="test_input"
                                type="text"
                                placeholder={value.placeholder ? value.placeholder : "Edit Input"}
                                size={value.size}

                            />
                            <br/><p
                            className="error"
                            style={{
                                display: 'none',
                                color: 'red'
                            }}
                            >
                            </p>
                            <br/>
                            <Button onClick={() => {handleNavigate("/")}}>Вернуться на главную страницу</Button>
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
                                           max={25}
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