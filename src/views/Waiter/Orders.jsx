import React, {useState, useEffect} from "react";
import { CardOrder } from "../../components/Orders/Card-order";
import '../../components/Buttons/Button.css';
import Header from "../../components/Header/Header";
import getOrders from "../../api_functions/getOrders";
import waiterImg from "../../Images/camarero.png"

export function Orders() {
  
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders(setOrders)
    }, [])

    const filteredByStatus = orders.filter((item) => item.status === "delivering")
    console.log(filteredByStatus);
   
    return (
        <section className="waiter">
            <Header path="/menu" active2="active" first="Menú" second="Ver pedidos" log={waiterImg} />
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
  
