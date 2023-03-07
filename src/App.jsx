import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='container mt-5'>
      <h1>Hello</h1>
      <p>Shakalad</p>
      <p>lolo pepe</p>
    </div>
  )
}

export default App;