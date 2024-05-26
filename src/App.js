import React from "react";
import './App.css';
import {Button} from "react-bootstrap";
import Signin from "./Signin";
import Signup from "./Signup";
import {useNavigate} from "react-router-dom";

let Component;

function App () {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(id)
    }

    return (
    <div className="App">
      <header className="App-header">
          <Button
              className ="mt-3"
              type="submit"
              onClick={() => {handleNavigate("Signin")}}
          >
              Войти
          </Button>
          <Button
              className ="mt-3"
              type="submit"
              onClick={() => {handleNavigate("Signup")}}
          >
              Регистрироваться
          </Button>
          <Button
              className ="mt-3"
              type="submit"
              onClick={() => {handleNavigate("TextInputComponent")}}
          >
              Редактирование поля input
          </Button>
      </header>
    </div>
  );
}

export default App;
