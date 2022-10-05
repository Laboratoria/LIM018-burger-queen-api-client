import '../css/sheet.css'

function orderSheet(props) {
    const fullOrder = props.items.map(item => {
        return (
            <div className='item'>
                <p> {item.name}</p>
                <p> S/.{item.price} </p>
                <p> {item.quantity} </p>
            </div>
        )
    })
    return (
        <div className="orderSheet">
            <label for="client"> Cliente </label>
            <input type="text" value={props.name} />
            {fullOrder}
            <p> Total </p>
            <button> Enviar pedido </button>
        </div>
    )
}

export default orderSheet