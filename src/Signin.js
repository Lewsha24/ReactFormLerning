import React, {useRef, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Signup = () => {
    const [value, setValue] = useState({})
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(id)
    }

    const handleChange = (event) => {
        setValue((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
        console.log(value)
    }

    const handleSubmit = () => {
        alert("Nice good F12 Click")
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row >
                        <Col>
                            <Form
                                style={{display: "grid"}}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                            >
                                <input
                                    name="email"
                                    type="email"
                                    value={value.email}
                                    placeholder="email"
                                />
                                <input
                                    name="password"
                                    type="password"
                                    value={value.password}
                                    placeholder="password"
                                />
                                <br/><Button type={"submit"}>Войти</Button>
                            </Form>
                            <br/>
                            <Button
                                type={"button"}
                                onClick={() => {handleNavigate('/')}}
                                >
                                Вернуться на главную страницу
                                </Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default Signup