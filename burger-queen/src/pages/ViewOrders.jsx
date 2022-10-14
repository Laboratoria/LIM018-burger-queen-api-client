import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Order from "../components/Sheets/Sheets.jsx";
import style from "../css/Waiter.module.css";
import getOrders from "../functions/getOrders.js";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders(setOrders);
  }, []);

  const viewOrders = () => {
    return orders.map((one) => (
      <Order id={one.id} client={one.client} products={one.products} />
    ));
  };

  return (
    <>
      <Header />
      <div className={style.containerOrders}>{viewOrders()}</div>
    </>
  );
}
