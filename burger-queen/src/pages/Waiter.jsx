/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

import OrderSheet from "../components/OrderSheet.jsx";
import style from "../css/Waiter.module.css";
import add from "../img/add.png";
import peticionHTTP from "../functions/getProducts";

export default function Waiter() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("Breakfast");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  const addProducts = (e) => {
    const item = {};
    item.product = e.currentTarget.dataset.value.split(",")[0];
    item.price = parseInt(e.currentTarget.dataset.value.split(",")[1]);
    item.qyt = 1;
    setOrder([...order, item]);
  };

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
          <p>
            <span>S/.</span>
            {product.price}
          </p>
          <button
            className={style.addButton}
            onClick={addProducts}
            data-value={`${product.name}, ${product.price}`}
          >
            {" "}
            <img className={style.add} src={add} title="add"></img>
          </button>
        </div>
      </div>
    ));

    return filteredCards;
  };

  return (
    <>
      <Header />
      <div className={style.container}>
        <ul className={style.buttonContainer}>
          <li className={style.buttonMenu} onClick={() => setType("Breakfast")}>
            {" "}
            Desayuno
          </li>
          <li className={style.buttonMenu} onClick={() => setType("Lunch")}>
            Almuerzo
          </li>
          <li
            className={style.buttonMenu}
            onClick={() => setType("Acompañamiento")}
          >
            Acompañamiento
          </li>
        </ul>
        <div className={style.menuContainer}>{createCards(type)}</div>
        <OrderSheet items={order} />
      </div>
    </>
  );
}
