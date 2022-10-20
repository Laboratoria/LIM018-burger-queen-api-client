const BASE_URL = "http://localhost:3001";
const orderPath = '/orders';
const token = localStorage.getItem("token");

const updateOrder = async() => {

    const res = await fetch(`${BASE_URL}${orderPath}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify()
    });

    const result = await res.json();
    return result;
}

export default updateOrder;