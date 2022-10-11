import React, {useState} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import './Waiter.css';
import '../../components/Buttons/Button.css';


export const WaiterView = () => {
   
    const [menu, setMenu] = useState("breakfast")

    const filteredProducts = (typeMenu) => {
        const API_URL = "http://localhost:3001";
        const productPath = '/product'
        fetch(`${API_URL}${productPath}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>res.json())
        .then((products)=>{
            const typeProducts = products.filter((prod) => {
                return prod.type === typeMenu })
                
                const cards = typeProducts.map((type)=> {
                    return (<CardMenu 
                        name = {type.name} 
                        image = {type.image} 
                        key = {type.id} 
                        id = {type.id} />)
                })
                return cards;
        })

  
    }

 
    return (
        <section className="waiter">
            <div className="content-waiter">
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton 
                        title='Desayuno' 
                        createCards = {()=>setMenu("breakfast")}/>
                        <MenuButton 
                        title='Almuerzo y Cena' 
                        createCards = {()=>setMenu("dinner")} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        <nav>
                            <MenuButton 
                            title='Hamburguesa' 
                            bg = "bg-lightBeige" 
                            createCards = {()=>setMenu("dinner")}/>
                            <MenuButton 
                            title='Extras' 
                            bg = "bg-lightBeige" 
                            createCards = {()=>setMenu("other")} />
                            <MenuButton 
                            title='Bebidas' 
                            bg = "bg-lightBeige" 
                            createCards = {()=>setMenu("drinks")} />
                        </nav>
                        {filteredProducts(menu)}
                    </div>
                </div>

                <div className="container-menu">
                    <div className="nav-menu">
                        <label>Cliente
                            <input type="text"/>
                        </label>
                    </div>
                    <div className="container-orders mg-top">
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                        <div className="container-total-sell">
                            <div className="total-sell">
                                <h3>TOTAL:</h3>
                                <p>S/. 45.00</p>
                            </div>
                            <MenuButton title='Enviar orden' bg="bg-orange"/>
                        </div>
                    </div>  
                </div>
            </div>    
            <div className="back-blur">    
            </div>
        </section>
    );
}