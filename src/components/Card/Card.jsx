import "./Card.css";

export const CardMenu = (props) => {
    const nameProduct = props.name
    const imgProduct = props.image
    const pryceProd = props.pryce
    const dataId = props.id

    return (
        <>
                <div className="card-container" id = {dataId} >
                    <div className="img-zone">
                        <h3>{nameProduct}</h3>
                        <img src={imgProduct} alt="menu" className="card-item" />
                    </div>
                    <div className="item-controller">
                        <div className="counter">+</div>
                        <p>${pryceProd}</p>
                        <div className="counter">-</div>
                    </div>
                </div>
        </>
    )
}