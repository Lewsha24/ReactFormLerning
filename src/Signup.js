import React, {useState} from "react";
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
            <Row>
                <Col>
                    <Form>
                        <input
                            type="text"
                            value={value.name}
                            placeholder={"name"}
                        />
                        <input
                            type="text"
                            value={value.nickname}
                            placeholder={"nickname"}
                        />
                        <input
                            type="email"
                            value={value.email}
                            placeholder={"email"}
                        />
                        <input
                            type="text"
                            value={value.gender}
                            placeholder={"gender"}
                        />
                        <input
                            type="password"
                            value={value.password}
                            placeholder={"password"}
                        />
                        <input
                            type="pawword"
                            value={value.repeatPassword}
                            placeholder={"repeatPassword"}
                        />
                        <Button type={"submit"}>Войти</Button>
                        <Button type={"button"}
                        onClick={() => {handleNavigate('/')}}>Вернуться на главную</Button>
                    </Form>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
            </header>
        </div>
    )
}

export default Signup