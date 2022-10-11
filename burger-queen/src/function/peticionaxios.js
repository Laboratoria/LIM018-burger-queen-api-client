import axios from 'axios'
const API_URL = "http://localhost:3001/products";
const token = localStorage.getItem("users").slice(1, -1);

const peticionHTTP = async(state)=>{
    const peticion = await axios.get(API_URL, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    state(peticion.data)
}

export default peticionHTTP