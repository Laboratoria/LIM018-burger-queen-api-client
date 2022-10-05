import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.module.css';
import Login from './components/Login.jsx';
import Waiter from './components/waiter.js';
import Lunch from './components/Lunch.jsx';


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="waiter" element={<Waiter/>}> </Route>
      <Route path='lunch' element={<Lunch/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
