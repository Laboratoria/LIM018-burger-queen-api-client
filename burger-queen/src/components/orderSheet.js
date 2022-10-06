import { useState } from 'react';
import '../css/sheet.css'

function OrderSheet(props) {
    const items = props.items

    const [client, setClient] = useState("");
    const [table, setTable] = useState("")

    const fullOrder = items.map(item => {
        return (
            <div className='item' key={item.id}>
                <p> {item.name}</p>
                <p> S/.{item.price} </p>
                <p> {item.quantity} </p>
            </div>
        )
    })
    return (
        <div className="orderSheet">
            <label htmlFor="client"> Cliente </label>
            <input type="text" value={client} onChange={e => setClient(e.target.value)} />
            <label htmlFor="table"> Mesa </label>
            <input type="text" value={table} onChange={e => setTable(e.target.value)} />
            {fullOrder}
            <p> Total </p>
            <button> Enviar pedido </button>
        </div>
    )
}

export default OrderSheet