import React, { useState , useEffect} from "react";
import Header from "../components/header.js";
import ContainerWaiter from "../components/ContainerWaiter.js";
import OrderSheet from "../components/OrderSheet.js";
import style from "../css/containerWaiter.module.css";
import sandwich from "../img/emparedado.png";
import jugo from "../img/jugofrutas.png";
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

  const menu = {
    items: [
      {
        id: "001",
        img: "https://user-images.githubusercontent.com/105660480/194344040-c8bf9234-ba14-437a-b04a-9c505b6dab7e.png",
        name: "Café americano",
        price: 12,
      },
      {
        id: "002",
        img: "https://user-images.githubusercontent.com/105660480/194344343-b4964d2c-7f02-4504-b990-35f5d1d9892e.png",
        name: "Café con leche",
        price: 12,
      },
      {
        id: "003",
        img: sandwich,
        name: "Sandwich de jamón y queso",
        price: 12,
      },
      { id: "004", img: jugo, name: "Jugo de frutas", price: 12 },
    ],
  };

  

  const token = localStorage.getItem("users").slice(1, -1);

  //console.log(token);
  const [products, setProducts] = useState([])

useEffect(()=>{
  axios
    .get(API_URL, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
  },[]);
  
  //console.log(products)

  return (
    <div>
      <Header></Header>
      <button> Desayuno</button>
      <button> Almuerzos y cena </button>
      <div className={style.container}>
        <ContainerWaiter items={menu.items}></ContainerWaiter>
        <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
      </div>
    </div>
  );
}
