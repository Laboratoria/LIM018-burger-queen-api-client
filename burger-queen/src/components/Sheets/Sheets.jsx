import { OrderButtons } from "../Button/Button";
import style from "./Sheets.module.css";

function Order({ id, client, products }) {
  const oneItem = products.map((product) => {
    return (
      <div className={style.oneItem} key={product.name}>
        <p>{product.product}</p>
        <p>{product.qyt}</p>
      </div>
    );
  });

  return (
    <div className={style.order} key={id}>
      <h3> Pedido #{id}</h3>
      <p> Cliente: {client}</p>
      {oneItem}
      <OrderButtons />
    </div>
  );
}

export default Order;
