import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.module.css';
import Login from './pages/Login.jsx';
import Waiter from './pages/Waiter.jsx';
import Lunch from './pages/Lunch';


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
