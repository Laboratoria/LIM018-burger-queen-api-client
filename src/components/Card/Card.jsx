import "./Card.css";

export const CardMenu = (props) => {
    const nameProduct = props.name
    const imgProduct = props.image
    const dataId = props.id
    const price = props.price
    const addProduct = props.adding
    const removeProduct = props.removing

    return (
        <>
            <div className="card-container">
                <div className="img-zone">
                    <h3>{nameProduct}</h3>
                    <img src={imgProduct} alt="menu" className="card-item" />
                </div>
                <div className="item-controller">
                    <button data-id= {dataId} className="counter" onClick={addProduct}>+</button>
                    <p className="money">{price}</p>
                    <button className="counter" onClick={removeProduct}>-</button>
                </div>
            </div>
        </>
    )
}