import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.module.css';
import Login from './pages/Login.jsx';
import Waiter from './pages/Waiter.jsx';
import Lunch from './pages/Lunch';
import Orders from './pages/VerPedidos';


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="waiter" element={<Waiter/>}/>
      <Route path='lunch' element={<Lunch/>}/>
      <Route path='orders' element={<Orders/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
