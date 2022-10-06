import React from "react";
import Header from '../components/header.js';
import ContainerWaiter from '../components/ContainerWaiter.js';
import OrderSheet from '../components/OrderSheet.js';
import style from '../css/containerWaiter.module.css';
import sandwich from '../img/emparedado.png'
import jugo from '../img/jugofrutas.png'

export default function Waiter() {
    const newClient = {
        name: 'Gabriela',
        items: [
            { id: '001', name: 'Café expreso', price: 12, quantity: 1 },
            { id: '002', name: 'Hamburguesa', price: 12, quantity: 2 },
            { id: '003', name: 'Limonada', price: 12, quantity: 1 }
        ]
    }

    const menu = {
        items: [
            { img: "https://user-images.githubusercontent.com/105660480/194344040-c8bf9234-ba14-437a-b04a-9c505b6dab7e.png", name: 'Café americano', price: 12 },
            { img: "https://user-images.githubusercontent.com/105660480/194344343-b4964d2c-7f02-4504-b990-35f5d1d9892e.png", name: 'Café con leche', price: 12 },
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