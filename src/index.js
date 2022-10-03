import React from "react";
import ReactDOM  from "react-dom/client";
import { Login } from "./views/Login/Login";
import { WaiterView } from "./views/Waiter/Waiter";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <Login/>
        <WaiterView/>
    </>
)






