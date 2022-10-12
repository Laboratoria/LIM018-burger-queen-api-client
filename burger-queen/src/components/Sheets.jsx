import {OrderButtons} from "./Button";
import style from "../css/Waiter.module.css";

function Order(props) {
  const oneItem = props.products.map((product) => {
    return (
      <div className={style.oneItem} key={product.name}>
        <p>{product.product}</p>
        <p>{product.qyt}</p>
      </div>
    );
  });

  return (
    <div className={style.order} key={props.id}>
      <h3> Pedido #{props.id}</h3>
      <p> Cliente: {props.client}</p>
      {oneItem}
      <OrderButtons />
    </div>
  );
}

export default Order;
