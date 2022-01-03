import React from 'react';
import axios from 'axios';
import { useEffect , useState} from 'react' 
import './style.css'
export default function App() {

  const [quote, setQuote] = useState('');
  useEffect(() => {
    fetchAdvice();
  },[]);
  async function fetchAdvice ()  {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        setQuote({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const {advice} = quote
  return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          
          <button className="glow-on-hover" onClick={fetchAdvice}>
            <div className="left"></div>
            GIVE ME ADVICE!            
            <div className="right"></div>
          </button>
        </div>
      </div>
    );
  
}

export default App;
