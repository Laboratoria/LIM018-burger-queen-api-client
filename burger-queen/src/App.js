import  ReactDOM  from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.module.css';
import Login from './components/Login.jsx';
import Waiter from './components/waiter';


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="waiter" element={<Waiter/>}> </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
