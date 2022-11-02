const BASE_URL= "http://localhost:3001";
const authPath = "/auth";
const userPath = "/users";
const token = localStorage.getItem("token");

export const postUser = async(data) => {
    const res = await fetch(`${BASE_URL}${authPath}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data) // convierte js a json
    })
    
    const result = await res.json();
    return result;
}

export const createUser = async(data) => {
    const res = await fetch (`${BASE_URL}${userPath}`, {
        method: "POST",
        headers: {"Content-Type": "application/json;charset=UTF-8",
        "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    return result;
}