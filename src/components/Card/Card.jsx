import coffie from "../../Images/coffee.png";
import "./Card.css";

export const CardMenu = () => {
    return (
        <>
            <div className="card-container">
                <div className="img-zone">
                    <h3>Café Americano</h3>
                    <img src={coffie} alt="coffie" className="card-item" />
                </div>
                <div className="item-controller">
                    <div className="counter">+</div>
                    <p>2</p>
                    <div className="counter">-</div>
                </div>
            </div>
        </>
    )
}