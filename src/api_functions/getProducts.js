const API_URL = "http://localhost:3001";
const productPath = '/products';
const token = localStorage.getItem("token");

const getProducts = async (newState) => {
    const res = await fetch(`${API_URL}${productPath}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }
    });
    console.log(res, 'res');
    
    const dataProducts = await res.json();
    console.log(dataProducts, 'prods');
    return newState(dataProducts);
}

export default getProducts;