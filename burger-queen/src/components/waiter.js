import React from "react";
import Header from './header.js';
import ContainerWaiter from './ContainerWaiter.js';
import OrderSheet from './orderSheet.js';
import style from '../css/containerWaiter.module.css';

export default function Waiter() {
    return (
        <div>
            <Header></Header>
            <div className={style.container}>
                <ContainerWaiter></ContainerWaiter>
                <OrderSheet></OrderSheet>
            </div>
        </div>
    )
}