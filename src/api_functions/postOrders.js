const BASE_URL = "http://localhost:3001";
const orderPath = '/orders';
const token = localStorage.getItem("token");

const postOrders = async(arrayProds, name, tab) => {

    const clientOrder = {
        userId: '',
        client: name,
        table: tab,
        products: arrayProds.map(prod => {
            const product = {
                name: prod.name,
                price: prod.price,
                qty: prod.qty
            }
            return product;
        })
    };

    const res = await fetch(`${BASE_URL}${orderPath}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(clientOrder)
    })

    const result = await res.json();
    console.log(result);
    return result
}

export default postOrders;