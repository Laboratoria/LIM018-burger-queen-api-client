import { useState } from "react";
import style from "./Sheets.module.css";

function OrderSheet({ items, total, onDeleteItem }) {
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");

  const fullOrder = items.map((item) => {
    return (
      <div className={style.item} key={item.id}>
        <p> {item.name}</p>
        <p> S/.{item.price} </p>
        <p> {item.quantity} </p>
        <button
          className={style.deleteProduct}
          onClick={() => onDeleteItem(item)}
        >
          <hr className={style.delete}></hr>
        </button>
      </div>
    );
  });
  return (
    <div className={style.orderSheet}>
      <label htmlFor="client"> Cliente </label>
      <input
        type="text"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <label htmlFor="table"> Mesa </label>
      <input
        type="text"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
      {fullOrder}
      <p> Total {total} </p>
      <button> Enviar pedido </button>
    </div>
  );
}

export default OrderSheet;
