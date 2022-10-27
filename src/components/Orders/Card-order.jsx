import "./Card-order.css"

export const CardOrder = (props) => {

    let total = 0

    return (
        <div className="order">
            <div className="status">
                <h3>{props.theStatus}</h3>
                <p>25:00</p>
            </div>
            <div className="date-zone">
                <h4>Fecha: {props.dateEntry}</h4>
                <h4>Cliente: {props.client}</h4>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Cant</th>
                            <th>Descripción</th>
                            <th>S/.</th>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                    {props.products.map((prod, index) => {
                        const totalProduct = prod.qty*prod.price
                        total+=totalProduct
                        return (
                                <tr key={index}>
                                    <th>{prod.qty}</th>
                                    <th>{prod.name}</th>
                                    <th>{totalProduct}</th>
                                </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            
            <div>
            ____________________________________
                <p>TOTAL S/. {total}</p>     
            </div>
            <div className={`entregar ${props.hidd}`}>  {/*props.hidd es un string para clase .hidden*/}
                <button onClick={props.update} className="btn-menu bg-orange">Entregar</button>
            </div>
        </div>
    )
}