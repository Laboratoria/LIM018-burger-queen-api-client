import style from "../css/Waiter.module.css";
import add from "../img/add.png";

function Card({ product, onAddButtonClick }) {
  return (
    <div key={product.id} className={style.productCard}>
      <img src={product.image} alt={product.name} className={style.imgBreak} />
      <p>{product.name} </p>
      <div className={style.addContainer}>
        <p>
          <span>S/.</span>
          {product.price}
        </p>
        <button
          className={style.addButton}
          onClick={() => onAddButtonClick(product)}
        >
          <img className={style.add} src={add} title="add" alt="add"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
