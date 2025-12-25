import { useState, useEffect } from 'react'
import './index.css'
import List from './List';


function App() {

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect( () => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 )
    return () => clearInterval(interval)
  }, []);


  return (
    <>
      <div>
        <h3>BHARRAT GEHLOT</h3>
        <h1>Monster Coder</h1>
      </div>

      <div className='currentTime'>
        <h2>Added on 22-12-2025</h2>
        <p>Current Time: {currentTime.toLocaleString()}</p>
      </div>
      <p>27 / React Dev / Mindcoder</p>
      <p>This website uses react and only react. Thankyou</p>
      <List></List>
    </>
  );
}

export default App
