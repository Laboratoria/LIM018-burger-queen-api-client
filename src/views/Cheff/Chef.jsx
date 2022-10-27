import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import chefImg from "../../Images/sombrero-de-cocinero.png";
import CardChef from "../../components/Orders/CardChefOrder";
import getOrders from "../../api_functions/getOrders";
import { updateOrder } from "../../api_functions/updateOrder";

export const ChefView = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        getOrders(setOrders);
    }, [])
    
    const handleUpdate = async(orders, order, id, text) =>{
        const newOrders = [...orders]
        const response = await updateOrder(order, id, text)
        if(response){
            setOrders(newOrders)
        }
    }    
    
    const filteredByStatus = orders.filter((item) => item.status === "pending")
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
                theStatus={order.status}
                update={() => handleUpdate(orders, order, order.id, "delivering")} 
                 />
                ))}
            </div>
            <div className="back-blur"></div>
        </section>

    )
}