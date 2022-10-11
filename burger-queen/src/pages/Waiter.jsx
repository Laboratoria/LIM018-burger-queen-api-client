import React, { useState, useEffect } from "react";
import Header from "../components/header.js";

import OrderSheet from "../components/OrderSheet.js";
import style from "../css/containerWaiter.module.css";
import sandwich from "../img/emparedado.png";
import jugo from "../img/jugofrutas.png";

import peticionHTTP from "../function/peticionaxios.js";


export default function Waiter() {
  const newClient = {
    name: "Gabriela",
    items: [
      { id: "a", name: "Café expreso", price: 12, quantity: 1 },
      { id: "b", name: "Hamburguesa", price: 12, quantity: 2 },
      { id: "c", name: "Limonada", price: 12, quantity: 1 },
    ],
  };




  

  //console.log(token);
  const [products, setProducts] = useState([])

  useEffect(() => {
   peticionHTTP(setProducts)
  },[]);


    return (
      <div>
        <Header></Header>
        <button> Desayuno</button>
        <button> Almuerzos y cena </button>
        <div className={style.container}>
        {products.map((product) => (
            <div key={product.name}>
              <img src={product.image} alt={product.name}/>
              <p>{product.name}</p>
              <p>S/.{product.price}</p>
            </div>
          ))}
          <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
        </div>
      </div>
    );
    }
