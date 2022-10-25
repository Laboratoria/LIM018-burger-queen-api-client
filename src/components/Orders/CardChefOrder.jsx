import "./Card-order.css"

const CardChef = (props) => {

    return(
        <div className="order">
            <div>
                <h3>{props.theStatus}</h3>
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
                <button onClick={props.update} className="btn-menu bg-orange">Listo</button>
            </div>
        </div>
    )
}

export default CardChef;