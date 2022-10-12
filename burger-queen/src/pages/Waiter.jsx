/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

import OrderSheet from "../components/OrderSheet.jsx";
import style from "../css/Waiter.module.css";
import add from "../img/add.png"
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
        <div className={style.addContainer}>
        <p><span>S/.</span>{product.price}</p>
        <button className={style.addButton}> <img className ={style.add} src={add} title="add"></img></button>
        </div>
      </div>
    ));

    return filteredCards;
  };

  return (
    <div>
      <Header></Header>

      <div className={style.container}>
        <ul className={style.buttonContainer}>
          <li className={style.buttonMenu} onClick={() => setType("Breakfast")}> Desayuno</li>
          <li className={style.buttonMenu} onClick={() => setType("Lunch")}>
            Almuerzo
          </li>
          <li className={style.buttonMenu} onClick={() => setType("Acompañamiento")}>
            Acompañamiento
          </li>
        </ul>

        <div className={style.menuContainer}>
          {createCards(type)}
        </div>
      <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
      </div>
    </div>
  );
}
