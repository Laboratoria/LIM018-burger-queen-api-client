import "./Card-order.css"
import { MenuButton } from "../../components/Buttons/Button";


export const CardOrder = () => {

    return (
        <>
            <div className="content-order">
                <div className="order">
                    <div className="date-zone">
                        <h4>Fecha: 10/10/22</h4>
                        <h4>Cliente: Caro</h4>
                        <h4>Hora: 5:00 pm</h4>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <th>Cant</th>
                                <th>Descripción</th>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                            <tr>
                                <th>3</th>
                                <th>Café con leche</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Hambuguesa de pollo</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Jugo de frutas</th>
                            </tr>
                            ____________________________________

                            <tr>
                                <th></th>
                                <th>TOTAL S/ 25</th>
                            </tr>
                        </tbody>
                    </table>

                    <div className="btn-entregar">
                        <MenuButton
                        title = "Entregar" bg="bg-orange"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}