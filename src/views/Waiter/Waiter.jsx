import React from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import './Waiter.css';
import '../../components/Buttons/Button.css';
import api from "../../fakeApi/db.json"

export const WaiterView = () => {
    const products = api.products;

    const filteredProducts = (typeMenu) => {
        const typeProducts = products.filter((prod) => {
        return prod.type === typeMenu })
        
        const cards = typeProducts.map((type)=> {
            return (<CardMenu name = {type.name} image = {type.image} key = {type.id} id = {type.id} />)
        })
        return cards;
    }

 
    return (
        <section className="waiter">
            <div className="content-waiter">
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton title='Desayuno' createCards = {()=>{}}/>
                        <MenuButton title='Almuerzo y Cena' createCards = {()=>{}} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        {filteredProducts("breakfast")}
                        {/* {filteredProducts("dinner")} */}
                        {/* {filteredProducts("drinks")} */}
                        {/* {filteredProducts("other")}         */}
                         
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