import React from "react";
import Header from '../components/header.js';
import OrderSheet from '../components/orderSheet.js';
import ContainerWaiter from '../components/ContainerWaiter.js'
import style from '../css/containerWaiter.module.css';
import egg from '../img/hamburconhuevo.png'
import double from '../img/hamburdoble.png'
import cheeseburger from '../img/hamburqueso.png'
import simple from '../img/hambursimple.png'

export default function Lunch() {
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
            { img: simple, name: 'Hamburguesa simple', price: 12 },
            { img: double, name: 'Hamburguesa doble', price: 12 },
            { img: cheeseburger, name: 'Hamburguesa con queso', price: 12 },
            { img: egg, name: 'Hamburguesa con huevo', price: 12 },
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