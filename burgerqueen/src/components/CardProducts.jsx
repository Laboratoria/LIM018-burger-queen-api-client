import ButtonSend from './ButtonSend'
import '../styles/showProducts.css'

export default function CardProducts({product: {image, name, price, _id}, onAddMenu, onremoveMenu}) {

  return (
    <div className="food-card">
      <img src={image} alt={image} className="img-products"/>
      <p className="name-product">{name}</p>
      <p className="price-product">Costo:{`S/. ${price}`}</p>
      <ButtonSend id={_id}  title="añadir"  onClick={onAddMenu}/>
     
    </div>
  )
}

