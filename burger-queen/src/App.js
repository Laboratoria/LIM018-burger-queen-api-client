import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.module.css';
import Login from './pages/Login.jsx';
import Waiter from './pages/Waiter.jsx';
import Orders from './pages/VerPedidos';


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="products" element={<Waiter/>}/>
      <Route path='orders' element={<Orders/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
