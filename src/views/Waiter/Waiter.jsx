import React, {useState, useEffect} from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import getProducts from "../../api_functions/getProducts";
import trashCan from "../../Images/delete.png"
import './Waiter.css';
import '../../components/Buttons/Button.css';
import postOrders from "../../api_functions/postOrders";
import waiterImg from "../../Images/camarero.png"

export const WaiterView = () => {

    // const navigate = useNavigate();
    
    const [menu, setMenu] = useState("breakfast");
    // menu primero vale breakfast y setMenu se actualiza al dar click xej: drinks

    const [products, setProducts] = useState([]);
    const [arrayOfOrder, setArrayOfOrder] = useState([]);
    const [client, setClient] = useState("");
    const [table, setTable] = useState("");

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
                    adding = {() => addProduct(type)}
                    substracting = {() => subsProduct(type)}  
                    />)
            })
            return cards;
    }
 
    // productos unicos según id (no repetidos)
    const uniqueProduct = (id) => {
    const unique = arrayOfOrder.find((obj) => obj.id === id);
    /* console.log(arrayOfOrder, 'array de ordenes') */
    /* console.log(unique, 'unico') */
    return unique;
    };

    // función del boton +
    const addProduct = (type) => {
        /* console.log(type , 'tipo') */
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

    const subsProduct = (type) => {
        if(uniqueProduct(type.id)){
          const susQtyPrice = arrayOfOrder.map((order) => {
            if(order.id === type.id){ // order existe , type viene cuando doy click (-)
                const newOrder = order;
                if(newOrder.qty > 1){
                    newOrder.qty -= 1;
                    newOrder.price = type.price * newOrder.qty;
                }
            }
            return order;
        })
        setArrayOfOrder(susQtyPrice);
        }
    }
    /* console.log(arrayOfOrder, 'arrayorder'); */
    let total = 0    
    arrayOfOrder.map((item) => {
        total += item.price
        return total; 
    })

    const removeProduct = (obj)=> {
        const arrayWhithoutProduct = arrayOfOrder.filter((item)=> item.id !== obj.id )
        setArrayOfOrder(arrayWhithoutProduct)
    }
    console.log(arrayOfOrder, 'array inicial');
    console.log(client);
    console.log(table);
  
    return (
        <section className="waiter">
            <Header path="/orders" menuActive="active" first="Menú" second="Ver pedidos" log={waiterImg} />
            <div className="content-waiter">
                <div className="container-menu">
                    <nav className="nav-menu">
                        <MenuButton 
                        title='Desayuno'
                        bg= "active" 
                        whenClick = {()=>setMenu("breakfast")}/>
                        <MenuButton 
                        title='Almuerzo y Cena' 
                        whenClick = {()=>setMenu("dinner")} />
                    </nav>
                    <div id= "containerMenu" className="container-card-menu mg-top">
                        <nav className="nav-option-menu">
                            <MenuButton 
                            title='Hamburguesa' 
                            bg = "bg-orange" 
                            whenClick= {()=>setMenu("dinner")}/>  {/* función onClick */}
                            <MenuButton 
                            title='Extras' 
                            bg = "bg-brown" 
                            whenClick = {()=>setMenu("other")} />
                            <MenuButton 
                            title='Bebidas' 
                            bg = "bg-brown" 
                            whenClick = {()=>setMenu("drinks")} />
                        </nav>
                        {filteredProducts(menu)}
                    </div>
                </div>
                <div className="container-menu">
                    <div className="nav-menu">
                        <div>
                            <label>Cliente</label>
                            <input type="text" className="client" onChange={(e)=>setClient(e.target.value)}/>
                        </div>
                        <div>
                            <label>Mesa</label>
                            <input type="text" className="client" onChange={(e)=>setTable(e.target.value)}/>
                        </div>
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
                                                <button className="btn-delete"  onClick={()=>removeProduct(order)}>
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
                            <MenuButton title='Enviar orden' bg="bg-orange" whenClick={()=> postOrders(arrayOfOrder, client, table)}/>
                        </div>
                    </div>  
                </div>
            </div>    
            <div className="back-blur"></div>
        </section>
    );
}