import React from "react";
import { MenuButton } from "../../components/Buttons/Button";
import { CardMenu } from "../../components/Card/Card";
import './Waiter.css';
import '../../components/Buttons/Button.css';

export const WaiterView = () => {
    return (
        <section className="waiter">
            <div className="content-waiter">
                <div className="container-menu">
                    <div className="nav-menu">
                        <MenuButton title='Desayuno'/>
                        <MenuButton title='Almuerzo y Cena'/>
                    </div>
                    <div className="container-card-menu">
                        <CardMenu/>
                        <CardMenu/>
                        <CardMenu/>
                        <CardMenu/>           
                    </div>
                </div>

                <div className="container-menu items-orders">
                    <div className="nav-menu">
                        <label>Cliente
                            <input type="text"/>
                        </label>
                    </div>
                    <div className="container-orders">
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                    </div>  
                </div>
            </div>    
            <div className="back-blur">    
            </div>
        </section>
    );
}