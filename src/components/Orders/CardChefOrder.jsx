import { MenuButton } from "../Buttons/Button"
import "./Card-order.css"

const CardChef = (props) => {

    return(
        <div className="order">
            <div>
                <h3>En espera</h3>
                <p>25:00</p>
            </div>
            <div className="date-zone">
                <h4>Fecha: {props.dateEntry}</h4>
                <h4>Cliente: {props.client}</h4>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Cant</th>
                        <th>Descripción</th>
                    </tr>
                {props.products.map((prod, index) => {
                    return (
                            <tr key={index}>
                                <th>{prod.qty}</th>
                                <th>{prod.name}</th>
                            </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="btn-entregar">
                <MenuButton
                title = "Listo" bg="bg-orange"
                />
            </div>
        </div>
    )
}

export default CardChef;