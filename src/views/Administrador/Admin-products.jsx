import React, {useState, useEffect} from "react";
import getProducts from "../../api_functions/getProducts";
import '../../components/Buttons/Button.css';
import Header from "../../components/Header/Header";
import managerImg from "../../Images/manager.png";
import './Administrador.css'
import { ShowProduct } from "../../components/Modal/Modal";

export const AdminViewProducts = () => {
    const localProduct = JSON.parse(localStorage.getItem("product"));
    const [products, setProducts] = useState([]);
    const [productModal, setProductModal] = useState(false)

    useEffect(() => {
        getProducts(setProducts)
    }, [])
    
    const handleClick = (prod) => {
        console.log("click en tarjeta");
        localStorage.setItem("product", JSON.stringify(prod))
        setProductModal(true)
    }

    // const editProduct = () => {  // guardar en onchange el valor de los inputs
                                    // hacer un objeto con los valores de los inputs
        
    // }
   
    return (
        <section className="waiter">
            <Header log={managerImg} 
            path="/admin-users"
            path2="/admin-orders" 
            active3= "active" 
            first= "Ver usuarios" 
            second = "Ver pedidos"
            third = "Ver productos"
            display= "see"
            />
            <div className="content-order space-ev">
                { products.map((item, i)=> (
                    <div className="card-container shadow" key={i}  onClick={()=>handleClick(item)}>
                        <div className="img-zone">
                            <h3>{item.name}</h3>
                            <img src={item.image} alt="menu" className="card-item" />
                        </div>
                        <div className="price-zone">
                            <p className="money">S/. {item.price}</p>
                        </div>
                    </div>))
                }
            </div>
            <div className="back-blur"></div>
            <ShowProduct item={localProduct} 
            open={productModal} 
            onClose={() =>{setProductModal(false); localStorage.removeItem("product")}}
            />
        </section>  
    );
}
  