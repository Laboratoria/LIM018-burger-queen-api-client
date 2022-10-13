import React from "react";
import ReactDOM  from "react-dom/client";
import { Login } from "./views/Login/Login";
import { WaiterView } from "./views/Waiter/Waiter";
import { BrowserRouter, Routes, Route, } from "react-router-dom";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
console.log(root, 'root index')

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<WaiterView />} />
        </Routes>
    </BrowserRouter>

)




