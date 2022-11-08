const BASE_URL = "http://localhost:3001";
const orderPath = '/orders';
const token = localStorage.getItem("token");

const postOrders = async(order) => {

    const res = await fetch(`${BASE_URL}${orderPath}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(order)
    })

    const result = await res.json();
    console.log(result);
    return result
}

export default postOrders;