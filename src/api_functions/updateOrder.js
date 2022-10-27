const BASE_URL = "http://localhost:3001";
const orderPath = '/orders/';
const token = localStorage.getItem("token");

export const updateOrder = async(order, id, text) => {
    const statusChange = order
    statusChange.status = text;
    console.log(statusChange);

    const res = await fetch(`${BASE_URL}${orderPath}${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(statusChange) // convierte js a json
    })
    const result = await res.json();
    return result;
}
