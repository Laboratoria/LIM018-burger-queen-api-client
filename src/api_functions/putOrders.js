const BASE_URL= "http://localhost:3001";
const path = "/orders/"; 


const token = localStorage.getItem("token");
console.log(token , 'token');

const putOrders= async (order, id) => {
    console.log(id , 'que id');
    let changeStatusOrder = order;
    changeStatusOrder.status = "delivering"
    console.log(changeStatusOrder, 'cambio')

    const res = await fetch(`${BASE_URL}${path}${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(changeStatusOrder) // convierte js a json
    })
    const result = await res.json();
    return result;
    
}

export default putOrders;



