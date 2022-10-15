/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import OrderSheet from "../components/Sheets/OrderSheet.jsx";
import style from "../css/Waiter.module.css";
import Card from "../components/Card.jsx";
import peticionHTTP from "../functions/getProducts";

export default function Waiter() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("Breakfast");
  const [order, setOrder] = useState([]);
  //const [counter, setCounter] = useState(1)

  useEffect(() => {
    peticionHTTP(setProducts);
  }, []);

  // Carpeta por componente donde combine su hoja de estilos y estructura
  const filteredProducts = products.filter((product) => product.type === type);

  const addProducts = (product) => {
    const uniqueProduct = (id) => {
      const unique = order.find((obj) => obj.id === id);
      return unique;
    };

    if (uniqueProduct(product.id)) {
      const addQtyPrice = order.map((order) => {
        if (order.id === product.id) {
          const newOrder = order;
          newOrder.qty += 1;
          newOrder.price = product.price * newOrder.qty;
        }
        return order;
      })
      setOrder(addQtyPrice);
    } else setOrder([...order, { ...product, qty: 1 }]);

    console.log(order, 'arrayorder');

  };

  let total = 0
  order.map((item) => {
    total += item.price
    return total;
  })

  return (
    <>
      <Header />
      <div className={style.container}>
        <ul className={style.buttonContainer}>
          <li className={style.buttonMenu} onClick={() => setType("Breakfast")}>
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
        <div className={style.menuContainer}>
          {filteredProducts.map((product) => (
            <Card product={product} onAddButtonClick={addProducts} />
          ))}
        </div>
        <OrderSheet items={order} total={total} />
      </div>
    </>
  );
}
