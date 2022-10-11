import axios from 'axios'
const API_URL = "http://localhost:3001/products";
const token = JSON.parse(localStorage.getItem("users"))

const peticionHTTP = async (state)=>{
    const peticion = await axios.get(API_URL, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    state(peticion.data)
}

export default peticionHTTP