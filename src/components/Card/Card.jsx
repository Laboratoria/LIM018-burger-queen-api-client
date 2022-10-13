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
            <div className="card-container" id = {dataId} >
                <div className="img-zone">
                    <h3>{nameProduct}</h3>
                    <img src={imgProduct} alt="menu" className="card-item" />
                </div>
                <div className="item-controller">
                    <button className="counter" onClick={addProduct}>+</button>
                    <p>{price}</p>
                    <button className="counter" onClick={removeProduct}>-</button>
                </div>
            </div>
        </>
    )
}