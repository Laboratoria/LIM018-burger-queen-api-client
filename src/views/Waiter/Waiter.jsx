import React, {useState, useEffect} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import './Waiter.css';
import '../../components/Buttons/Button.css';
import getProducts from "../../api_functions/getProducts";

export const WaiterView = () => {
   
    const [menu, setMenu] = useState("breakfast");
    // menu primero vale breakfast y setMenu se actualiza al dar click xej: drinks

    const [products, setProducts] = useState([]);
    const [arrayOfOrder, setArrayOfOrder] = useState([])

    useEffect(() => {
        getProducts(setProducts) 
    }, [])


    const filteredProducts = (typeMenu) => {  // typeMenu es un string xej 'dinner'
        const typeProducts = products.filter((prod) => { //product es el [{},{},...] de productos de la data
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
        const newOrder = {
            id: type.id,
            name: type.name,
            price: type.price,
            qty: 1
        }
        // console.log(type);
        arrayOfOrder.push(newOrder)
        
        setArrayOfOrder([...arrayOfOrder])
        // console.log(arrayOfOrder, 'array orden')
       
    }
  
console.log(arrayOfOrder);
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
                            changeType= {()=>setMenu("dinner")}/>  {/* función onClick */}
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
                        <div className="header-order">
                        <p>ÍTEM</p><p>CANT</p><p>PRECIO</p>
                        </div>
                        {arrayOfOrder.map((order, i) => (
                            <div key={i} className="item-order">
                                <p>{order.name}</p><span>1</span><span>{order.price}</span>

                            </div>))}
                        
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