import React, {useState, useEffect} from "react";
import { CardOrder } from "../../components/Orders/Card-order";
import './Waiter.css';
import '../../components/Buttons/Button.css';



export default function Orders() {

    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate("/menu")
    }

  
    return (
        <section className="waiter">
            {/* <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <button className="btn-header" onClick={handleSubmit}>Menú</button>
                <button className="btn-header active" >Ver pedidos</button>
                <img src={logOut} alt="logOut" className="log-out" />
            </header> */}

            <div className="content-order">
               <CardOrder/>
               <CardOrder/>
               <CardOrder/>

            </div>
            <div className="back-blur"></div>
        </section>  
    );
}
  
