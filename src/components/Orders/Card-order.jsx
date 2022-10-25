import "./Card-order.css"
import { MenuButton } from "../../components/Buttons/Button";


export const CardOrder = (props) => {

    let total = 0

    return (
        <>
            
            <div className="order">
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
                <div className="entregar">
                    <MenuButton
                    title = "Entregar" bg="bg-orange"
                    />
                </div>
            </div>
           
        </>
    )
}