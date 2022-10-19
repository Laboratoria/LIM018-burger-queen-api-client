const BASE_URL= "http://localhost:3001";
const authPath = "/auth"; 

const postUser = async(data) => {
    const res = await fetch(`${BASE_URL}${authPath}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data) // convierte js a json
    })
    
    const result = await res.json();
    return result;
}

export default postUser;