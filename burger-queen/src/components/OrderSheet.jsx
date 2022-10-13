import { useState } from 'react';
import '../css/sheet.css'

function OrderSheet({ items }) {
    
    const [client, setClient] = useState("");
    const [table, setTable] = useState("")

    const fullOrder = items.map(item => {
        return (
            <div className='item' key={item.id}>
                <p> {item.product}</p>
                <p> S/.{item.price} </p>
                <p> {item.qyt} </p>
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