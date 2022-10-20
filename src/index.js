import React from "react";
import ReactDOM  from "react-dom/client";
import { Login } from "./views/Login/Login";
import { WaiterView } from "./views/Waiter/Waiter";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Orders from "./views/Waiter/Orders";
import ChefView from "./views/Chef";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// console.log(root, 'root index')

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<WaiterView />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/chef" element={<ChefView />} />
        </Routes>
    </BrowserRouter>

)




