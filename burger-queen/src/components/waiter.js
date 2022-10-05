import React from "react";
import Header from './header.jsx';
import ContainerWaiter from './ContainerWaiter.js';
import OrderSheet from './orderSheet.js';
import style from '../css/containerWaiter.module.css';
import cafe from '../img/cafe.png'
import latte from '../img/cafeconleche.png'
import sandwich from '../img/emparedado.png'
import jugo from '../img/jugofrutas.png'

export default function Waiter() {
    const newClient = {
        name: 'Gabriela',
        items: [
            { name: 'Café expreso', price: 12, quantity: 1 },
            { name: 'Hamburguesa', price: 12, quantity: 2 },
            { name: 'Limonada', price: 12, quantity: 1 }
        ]
    }

    const menu = {
        items: [
            { img: cafe, name: 'Café americano', price: 12 },
            { img: latte, name: 'Café con leche', price: 12 },
            { img: sandwich, name: 'Sandwich de jamón y queso', price: 12 },
            { img: jugo, name: 'Jugo de frutas', price: 12 },
        ],
    }

    return (
        <div>
            <Header></Header>
            <div className={style.container}>
                <ContainerWaiter items={menu.items}></ContainerWaiter>
                <OrderSheet name={newClient.name} items={newClient.items}></OrderSheet>
            </div>
        </div>
    )
}