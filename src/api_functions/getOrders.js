const BASE_URL = "http://localhost:3001";
const orderPath = '/orders';
const token = localStorage.getItem("token");

const getOrders = async (newState) => {
    
    const result = await fetch(`${BASE_URL}${orderPath}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }
    })
   
    const dataOrders = await result.json();
  
    return newState(dataOrders)
}

export default getOrders;