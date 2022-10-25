import React, {useState, useEffect} from "react";
import getOrders from "../../api_functions/getOrders";
import { CardOrder } from "../../components/Orders/Card-order";
import '../../components/Buttons/Button.css';
import Header from "../../components/Header/Header";
import managerImg from "../../Images/manager.png";
import './Administrador.css'


export const AdminViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders(setOrders)
    }, [])

    const filteredByStatus = orders.filter((item) => item.status === "delivered")
    console.log(filteredByStatus);
   
   
    return (
        <section className="waiter">
            <Header log={managerImg} path="/admin-orders" active2= "active" first = "Ver usuarios" second = "Ver pedidos"/>
            <div className="content-order">
                {filteredByStatus.map((order, i) => {
                    return (<CardOrder key={i} dateEntry={order.dateEntry} client={order.client} products={order.products} />)
                  })  
                }
            </div>
            <div className="back-blur"></div>
        </section>  
    );
}
  