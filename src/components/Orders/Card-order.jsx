import "./Card-order.css"
import { MenuButton } from "../../components/Buttons/Button";


export const CardOrder = (props) => {

    let total = 0

    return (
        <>
            
                <div className="order">
                    <div className="date-zone">
                        <h4>Fecha: 10/10/22</h4>
                        <h4>Cliente: {props.client}</h4>
                        <h4>Hora: 5:00 pm</h4>
                    </div>

                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Cant</th>
                                    <th>Descripción</th>
                                    <th>Precio S/.</th>
                                </tr>
                            </tbody>
                        </table>

                        <table>
                            <tbody>
                            {props.products.map((prod, index) => {
                                const totalProduct = prod.qty*prod.product.price
                                total+=totalProduct
                                return (
                                        <tr key={index}>
                                            <th>{prod.qty}</th>
                                            <th>{prod.product.name}</th>
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
                    <div className="btn-entregar">
                        <MenuButton
                        title = "Entregar" bg="bg-orange"
                        />
                    </div>
                </div>
           
        </>
    )
}