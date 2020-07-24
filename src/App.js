import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [advice, setadvice] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchadvice();
  }, []);

  const fetchadvice = async () => {
    setLoading(true);
    const response = await axios.get('https://api.adviceslip.com/advice')
    setadvice(response.data.slip.advice)
    setLoading(false);
  }

  return (
    <div className='container'>
      <div className='card'>
        <h1 className='advice'>{advice}</h1>
        <button className='button' onClick={fetchadvice}>GIVE ME ADVICE !</button>
      </div>
    </div>
  )
}

export default App;
