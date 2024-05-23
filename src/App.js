import logo from './logo.svg';
import './App.css';
import {useRef, useState} from "react";

function App() {
    const formRef = useRef(null)
    const inputNameRef = useRef(null)
    const [value, setValue] = useState({
      // name: '',
      // lastname: '',
      // middlename: '',
  });
    const handleBegin = () => {
        inputNameRef.current.focus()
    }

  const handleChange = (event) => {
        if(event.target.value.includes('q')) {
            inputNameRef.current.blur()
        }else {
            setValue((prevState) => ({
              ...prevState,
              [event.target.name]: event.target.value
            }))
        }
  }

  const handleSubmit = (event) => {
      //Останови выполнение по мнению браузера
      event.preventDefault()
      console.log(value)
      formRef.current.reset();
  }


  const handleReset = () => {
      setValue({})
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <form style={
              {display: 'grid',}
          }
                ref={formRef}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onReset={handleReset}
          >
               <button onClick={handleBegin}>Начать заполнять форму</button>
              <input
                  ref={inputNameRef}
                  value={value.name}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  onFocus={() => console.log('onFocus')}
                  onBlur={() => console.log('Blur')}
              />
              <input value={value.lastname} type="text" name="lastname" placeholder="Фамилия"/>
              <input value={value.middlename} type="text" name="middlename" placeholder="Отчество"/>
              <button type={"submit"}>Submit</button>
              <button type="reset">Reset</button>
          </form>
      <p>
          {/*{value}*/}
      </p>
      </header>
    </div>
  );
}

export default App;
