import React, {useState, useEffect} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import getProducts from "../../api_functions/getProducts";
import './Waiter.css';
import '../../components/Buttons/Button.css';
import logOut from "../../Images/logout.png"

export const WaiterView = () => {
 
    const [menu, setMenu] = useState("breakfast"); 
    // menu primero vale breakfast y setMenu se actualiza al dar click xej: drinks

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(setProducts);
    }, []);
    
    const filteredAndPrintProducts = (typeMenu) => { // typeMenu es un string xej 'dinner'
        const typeProducts = products.filter((prod) => {  //product es el [{},{},...] de productos de la data
        return prod.type === typeMenu })
        console.log(typeProducts , 'tipo de prod');

        const cards = typeProducts.map((type)=> {
            return (<CardMenu 
                name = {type.name} 
                image = {type.image} 
                key = {type.id} 
                id = {type.id} />)
        })
        return cards;
    }

 
    return (
        <section className="waiter">
            <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <button className="btn-header active">Menú</button>
                <button className="btn-header">Ver pedidos</button>
                <img src={logOut} alt="logOut" className="log-out" />
            </header>
            <div className="content-waiter"> 
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton 
                        title='Desayuno' 
                        changeType = {()=>setMenu("breakfast")}/> {/* función onClick */}
                        <MenuButton 
                        title='Almuerzo y Cena' 
                        changeType  = {()=>setMenu("dinner")} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        <nav className="nav-option-menu">
                            <MenuButton 
                            title='Hamburguesa' 
                            bg = "bg-lightBeige" 
                            changeType  = {()=>setMenu("dinner")}/>
                            <MenuButton 
                            title='Extras' 
                            bg = "bg-lightBeige" 
                            changeType  = {()=>setMenu("other")} />
                            <MenuButton 
                            title='Bebidas' 
                            bg = "bg-lightBeige" 
                            changeType  = {()=>setMenu("drinks")} />
                        </nav>
                        <div className="showCards">
                            {filteredAndPrintProducts(menu)}
                        </div>
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