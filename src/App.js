import logo from './logo.svg';
import useJoke from './useJoke';
import './App.css';
import { useRef , useState } from 'react';

const App=() => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFistName] = useState("Jomon");
  const [lastName, setLastName] = useState("Mark")

  const joke = useJoke(firstName, lastName);

  const generateJoke = (e) =>{
    e.preventDefault()
    setFistName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);

  }

  return (
    <div className='App'>
      <center>
        <h1	>Joke Generator</h1>
        <h4>Enter your name and a joke will be generated</h4>
        <form>
          <input type="text"  placeholder='First Name' ref = {firstNameRef}></input>
          <input type ="text" placeholder='Last Name' ref = {lastNameRef}></input>
          <input type='submit' onClick={generateJoke} value={"Genrate Joke"}/>

        </form>
        <h3>{joke}</h3>
      </center>
    </div>
  )

}

export default App;
