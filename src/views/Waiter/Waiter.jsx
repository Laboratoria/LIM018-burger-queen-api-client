import { MenuButton } from "../../components/Buttons/Button";
import React from "react";
import './Waiter.css';
import '../../components/Buttons/Button.css';

export const WaiterView = () => {
    return (
        <section className="waiter">
            <div className="content-waiter">
                <div className="container-menu">
                    <div>
                        <MenuButton title='Desayuno'/>
                        <MenuButton title='Almuerzo y Cena'/>
                    </div>
                    <div>
                        <p>Tarjeta</p>
                        <p>Tarjeta</p>
                        <p>Tarjeta</p>
                        <p>Tarjeta</p>
                    </div>
                </div>

                <div>
                    <div>
                        <label>Cliente
                            <input type="text"/>
                        </label>
                    </div>
                    <div>
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