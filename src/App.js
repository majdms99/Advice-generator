import { useState, useEffect } from 'react';
import './App.css';
import image from './images/pattern-divider-desktop.svg'
import Icone from './images/icon-dice.svg'
function App() {

  /*state*/
  const [advices, setAdvices] = useState('');

  /*Get data from API*/
  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(result => {
        setAdvices(result.slip);
      })
  }
  // console.log(advices);

  const handelClick = () => {
    fetchData()
  }

  /*Run function {fetchData} when page loads*/
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      <div className='advice-box'>
        <h4 className='advice-number'>Advice #{advices.id}</h4>
        <q className='advice'>{advices.advice}</q>
        <img className='image' src={image} alt='advice' />
        <button onClick={handelClick}><img src={Icone} alt='icon' /></button>
      </div>

      <p className='copyright'>Created by <span>Majd Salameh</span></p>
    </div>
  );
}

export default App;
