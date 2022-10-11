import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

import OrderSheet from "../components/OrderSheet.jsx";
import style from "../css/Waiter.module.css";

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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  const [type, setType] = useState("Breakfast")

  const createCards = (productType) => {
    const filtered = products.filter((product) => product.type === productType);

    const filteredCards = filtered.map((product) => (
      <div key={product.name} className={style.productCard}>
        <img
          src={product.image}
          alt={product.name}
          className={style.imgBreak}
        />
        <p>{product.name} </p>
        <p>S/.{product.price}</p>
      </div>
    ));

    return filteredCards;
  };

  return (
    <div>
      <Header></Header>
      <div className={style.buttonContainer}>
        <button className={style.buttonMenu} onClick={() => setType("Breakfast")}> Desayuno</button>
      <button className={style.buttonMenu} onClick={() => setType("Lunch and dinner")}>
        Almuerzos y cena
      </button>
      </div>
      
      <div className={style.container}>
        
        <div className={style.menuContainer}>
          {createCards(type)}
          </div>
        <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
      </div>
    </div>
  );
}
