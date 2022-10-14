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

  const addProducts = (product) => {
    const item = {};
    item.id = product.id;
    item.product = product.name;
    item.price = product.price;
    item.qyt = 1;
    
  
    //const filterOrder = order.filter((idProd) => idProd.id !== item.id)
    setOrder((prevState) => [...prevState, item]);
    
    //console.log(filterOrder)
            
    /*return order.forEach( elem => {
      if( elem.id !== item.id) {
        
      }
      if(elem.id === item.id) {
        item.qyt += 1
      } 
      
      console.log("Id de cada producto en la orden", elem.id);
    console.log("Id del item a agregar", item.id)})*/

  };

  let total = 0;
  order.map( item => {
    total += item.price
    return total
  })

  //console.log(total)

  // Carpeta por componente donde combine su hoja de estilos y estructura
  const filteredProducts = products.filter((product) => product.type === type);

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
            <Card product={product} onAddButtonClick={addProducts}/>
          ))}
        </div>
        <OrderSheet items={order} total={total}/>
      </div>
    </>
  );
}
