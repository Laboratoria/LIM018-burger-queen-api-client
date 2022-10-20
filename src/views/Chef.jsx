import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import chefImg from "../Images/sombrero-de-cocinero.png";
import CardChef from "../components/Orders/CardChefOrder";
import getOrders from "../api_functions/getOrders";

const ChefView = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        getOrders(setOrders);
    }, [])

    return(
        <section className="waiter">
            <Header log={chefImg} />
            <div className="content-order">
                {orders.map((order,i) => (
                <CardChef key={i} 
                dateEntry={order.dateEntry} 
                client={order.client} 
                products={order.products} />
                ))}
            </div>
            <div className="back-blur"></div>
        </section>

    )
}

export default ChefView;