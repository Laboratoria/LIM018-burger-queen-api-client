const BASE_URL = "http://localhost:3001";
const productPath = '/products';
const token = localStorage.getItem("token");
console.log(token);

const getProducts = async (newState) => {
    const res = await fetch(`${BASE_URL}${productPath}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Authorization": `Bearer ${token}`
        }
    });
    /* console.log(res, 'respuesta de la petición'); */
    
    const dataProducts = await res.json();
    /* console.log(dataProducts, 'data products'); */

    return newState(dataProducts);
}

export default getProducts;