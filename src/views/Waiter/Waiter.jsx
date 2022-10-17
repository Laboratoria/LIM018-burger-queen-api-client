import React, {useState, useEffect} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import getProducts from "../../api_functions/getProducts";
import trashCan from "../../Images/delete.png"
import './Waiter.css';
import '../../components/Buttons/Button.css';

export const WaiterView = () => {
   
    const [menu, setMenu] = useState("breakfast");
    // menu primero vale breakfast y setMenu se actualiza al dar click xej: drinks

    const [products, setProducts] = useState([]);
    const [arrayOfOrder, setArrayOfOrder] = useState([]);
    // const [total, setTotal] = useState([])

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
                    price = {`S/. ${type.price}`} 
                    adding = {() => {addProduct(type)}}  
                    />)
            })
            return cards;
    }

 
    // Función para añadir productos a la orden
    // const addProduct = (type) => {
    //     console.log(arrayOfOrder);
    //     const newOrder = {
    //         id: type.id ,
    //         name: type.name,
    //         price: type.price,
    //         qty: 1
    //     }
    //     // console.log(type);
    //     arrayOfOrder.push(newOrder)
        
    //     setArrayOfOrder([...arrayOfOrder])
    //     // console.log(arrayOfOrder, 'array orden')
    // }

   // productos unicos según id (no repetidos)
  const uniqueProduct = (id) => {
    const unique = arrayOfOrder.find((obj) => obj.id === id);
    return unique;
  };
  // función del boton +
  const addProduct = (type) => {
      if (uniqueProduct(type.id)) {
        const addQtyPrice = arrayOfOrder.map((order) => {
            if (order.id === type.id) {
              const newOrder = order;
              newOrder.qty += 1;
              newOrder.price = type.price * newOrder.qty;
            }
            return order;
          })
        setArrayOfOrder(addQtyPrice);
    } else setArrayOfOrder([...arrayOfOrder, { ...type, qty: 1 }]);
  };
  console.log(arrayOfOrder, 'arrayorder');
    let total = 0    
    arrayOfOrder.map((item) => {
        total += item.price
        return total; 
    })


    return (
        
        <section className="waiter">
            <Header activeMenu = "active" />
            <div className="content-waiter">
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton 
                        title='Desayuno'
                        bg= "bg-orange" 
                        changeType = {()=>setMenu("breakfast")}/>
                        <MenuButton 
                        title='Almuerzo y Cena' 
                        changeType = {()=>setMenu("dinner")} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        <nav className="nav-option-menu">
                            <MenuButton 
                            title='Hamburguesa' 
                            bg = "bg-orange" 
                            changeType= {()=>setMenu("dinner")}/>  {/* función onClick */}
                            <MenuButton 
                            title='Extras' 
                            bg = "bg-brown" 
                            changeType = {()=>setMenu("other")} />
                            <MenuButton 
                            title='Bebidas' 
                            bg = "bg-brown" 
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
                            <table>
                                <tbody>
                                    <tr>
                                        <th>ÍTEM</th>
                                        <th></th>
                                        <th></th>
                                        <th>CANT</th>
                                        <th>PRECIO</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>
                            </table>
                        <div className="container-table">
                            <table>
                                <tbody>
                                    {arrayOfOrder.map((order, i) => (
                                        <tr key={i}>
                                            <td>{order.name}</td>
                                            <td>{order.qty}</td>
                                            <td>{`S/. ${order.price}`}</td>
                                            <td>
                                                <button className="btn-delete">
                                                <img className="img-trash" src={trashCan} alt="trash can" />
                                                </button>
                                            </td>
                                        </tr>))}
                                </tbody> 
                            </table>
                        </div>
                        <div className="container-total-sell">
                            <div className="total-sell">
                                <h3>TOTAL:</h3>
                                <p>{`S/. ${total}`}</p>
                            </div>
                            <MenuButton title='Enviar orden' bg="bg-orange" />
                        </div>
                    </div>  
                </div>
            </div>    
            <div className="back-blur"></div>
        </section>
    );
}