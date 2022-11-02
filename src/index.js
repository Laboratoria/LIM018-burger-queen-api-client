import React from "react";
import ReactDOM  from "react-dom/client";
import { Login } from "./views/Login/Login";
import { WaiterView } from "./views/Waiter/Waiter";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Orders } from "./views/Waiter/Orders"
/* import Orders from "./views/Waiter/Orders"; */
import { AdminViewUsers } from "./views/Administrador/Admin-users";
import { AdminViewOrders } from "./views/Administrador/Admin-orders";
import { AdminViewProducts } from "./views/Administrador/Admin-products";
import { ChefView} from "./views/Cheff/Chef"


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// console.log(root, 'root index')

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<WaiterView />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin-users" element={<AdminViewUsers />} />
            <Route path="/admin-orders" element={<AdminViewOrders />} />
            <Route path="/admin-products" element={<AdminViewProducts />} />
            <Route path="/chef" element={<ChefView />} />
        </Routes>
    </BrowserRouter>

)


