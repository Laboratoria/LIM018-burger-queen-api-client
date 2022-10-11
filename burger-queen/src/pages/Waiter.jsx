import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

import OrderSheet from "../components/OrderSheet.js";
import style from "../css/containerWaiter.module.css";

import axios from "axios";

const API_URL = "http://localhost:3001/products";

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
    const token = localStorage.getItem("users").slice(1, -1);
    axios
      .get(API_URL, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  //console.log(filtered);

  const createCards = (productType) => {
    const filtered = products.filter((product) => product.type === productType);

    const filteredCards = filtered.map((product) => (
      <div key={product.name} className={style.contentBreak}>
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

  //console.log(createCards("Breakfast"));

  return (
    <div>
      <Header></Header>
      <button onClick={() => createCards("Breakfast")}> Desayuno</button>
      <button onClick={() => createCards("Lunch and dinner")}>Almuerzos y cena</button>
      <div className={style.container}>
        <div className={style.menuContainer}>{createCards("Breakfast")}</div>
        <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
      </div>
    </div>
  );
}
