import "./Card.css";

export const CardMenu = (props) => {
  
    return (
        <>
            <div className="card-container">
                <div className="img-zone">
                    <h3>{ props.name}</h3>
                    <img src={props.image} alt="menu" className="card-item" />
                </div>
                <div className="item-controller">
                    <button className="counter" onClick={props.substracting}>-</button>
                    <p className="money">{props.price}</p>
                    <button className="counter" onClick={props.adding}>+</button>
                </div>
            </div>
        </>
    )
}