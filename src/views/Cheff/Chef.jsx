import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import chefImg from "../../Images/sombrero-de-cocinero.png";
import CardChef from "../../components/Orders/CardChefOrder";
import getOrders from "../../api_functions/getOrders";
import { putOrders } from "../../api_functions/putOrders";

export const ChefView = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        getOrders(setOrders);
    }, [])

    const filteredByStatus = orders.filter((item) => item.status === "pending")
    /* console.log(filteredByStatus)
 */
    /* const [status, setStatus] = useState("pending")

    const deliveringOrders = {...filteredByStatus , {status}}
    console.log(deliveringOrders, 'nuevo'); */


    return(
        <section className="waiter">
            <Header log={chefImg} />
            <div className="content-order">
                {filteredByStatus.map((order,i) => (
                <CardChef 
                key={i} 
                id={order._id}
                dateEntry={order.dateEntry} 
                client={order.client} 
                products={order.products}
                status={order.status}
                update={() => putOrders(order, order._id)} 
                 />
                ))}
            </div>
            <div className="back-blur"></div>
        </section>

    )
}