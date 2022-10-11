import axios from "axios";
import React from "react";
import Header from "../components/Header.jsx";
const API_URL = "http://localhost:3001/orders";
const token = localStorage.getItem("users").slice(1, -1);

export default function Orders() {
  axios
    .get(API_URL, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>Pedido #1</h2>
        </div>
        <div>
          <h2>Pedido #2</h2>
        </div>
      </div>
    </div>
  );
}
