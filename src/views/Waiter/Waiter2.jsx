import React, {useState, useEffect} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import './Waiter.css';
import '../../components/Buttons/Button.css';
import getProducts from "../../api_functions/getProducts";

export const WaiterView = () => {
   
    const [menu, setMenu] = useState("breakfast");
    const [products, setProducts] = useState([]);
    console.log(products, 'productos')
    const [arrayOfOrder, setArrayOfOrder] = useState([])

    useEffect(() => {
        getProducts(setProducts);
    }, [])


    const filteredProducts = (typeMenu) => {
        const typeProducts = products.filter((prod) => {
            return prod.type === typeMenu })
            
            const cards = typeProducts.map((type)=> { // este es el objProd unico filtrado x tipo
                //typeProducts es el array de obj
                return (<CardMenu 
                    name = {type.name} // type es el prod
                    image = {type.image} 
                    key = {type.id} 
                    id = {type.id} 
                    adding = {() => {addProduct(type)}}
                    />)
            })
            return cards;
    }
 
    
    // Función para añadir productos a la orden
    const addProduct = (type) => {
        console.log(type, 'tipo')
        const itemProduct = {};
        itemProduct.id = type.id;
        itemProduct.products = type.name;
        itemProduct.price = type.price;
        itemProduct.qty = 1;
        
        setArrayOfOrder([...arrayOfOrder, type])
        console.log(arrayOfOrder, 'array order')
    }


    return (
        <section className="waiter">
            <div className="content-waiter">
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton 
                        title='Desayuno' 
                        changeType = {()=>setMenu("breakfast")}/>
                        <MenuButton 
                        title='Almuerzo y Cena' 
                        changeType = {()=>setMenu("dinner")} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        <nav>
                            <MenuButton 
                            title='Hamburguesa' 
                            bg = "bg-lightBeige" 
                            changeType= {()=>setMenu("dinner")}/>
                            <MenuButton 
                            title='Extras' 
                            bg = "bg-lightBeige" 
                            changeType = {()=>setMenu("other")} />
                            <MenuButton 
                            title='Bebidas' 
                            bg = "bg-lightBeige" 
                            changeType = {()=>setMenu("drinks")} />
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