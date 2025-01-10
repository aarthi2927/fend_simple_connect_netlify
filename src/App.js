import './App.css';
import React, {useState } from 'react'; 
import { Routes,Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Nextpage from './nextpage';
function App() {
  const [message, setMessage] = useState(''); 
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home message={message} setMessage={setMessage}/>}/>
      <Route path='/nextpage' element={<Nextpage message={message} setMessage={setMessage}/>}/>
     </Routes>
    </div>
  );
}

export default App;
