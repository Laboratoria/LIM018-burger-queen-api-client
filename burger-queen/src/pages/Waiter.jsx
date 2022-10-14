/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

import OrderSheet from "../components/OrderSheet.jsx";
import style from "../css/Waiter.module.css";
import Card from "../components/Card.jsx";
import peticionHTTP from "../functions/getProducts";

export default function Waiter() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("Breakfast");
  const [order, setOrder] = useState([]);
  const [counter, setCounter] = useState(1)
  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  const addProducts = (product) => {
    const item = {};
    item.id= product.id;
    item.product = product.name;
    item.price = product.price;
    item.qyt = counter;
      setOrder((prevState) => [...prevState, item]);
  
      setCounter(counter+1)

    
  };

  //Separar los productos filtrados en un estado y que el map y componente Card vayan en el return 
  // Carpeta por componente donde combine su hoja de estilos y estructura
  const createCards = (productType) => {
    const filtered = products.filter((product) => product.type === productType);

    const filteredCards = filtered.map((product) => (
      <Card product={product} onAddButtonClick={addProducts} />
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
