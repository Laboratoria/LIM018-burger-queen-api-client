import React from "react";
import "./Modal.css";
import check from "../../Images/cheque.png";
import ekis from "../../Images/borrar.png";
import register from "../../Images/register.png";


export const Modal = (props) => {
    if(!props.open){
        return null
    }
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="center">
                    <img src={check} alt="respuesta" className="img-modal" />
                    <p>{props.message}</p>
                </div>
                <div className="center">
                    <button className="btn-modal" onClick={props.onClose}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export const ErrorModal = (props) => {
    if(!props.error){
        return null
    }
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="center">
                    <img src={ekis} alt="respuesta" className="img-modal" />
                    <p className="text-modal">{props.message}</p>
                </div>
                <div className="center">
                    <button className="btn-modal" onClick={props.onClose}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}


export const ModalCreateUser = (props) => {
    
    if(!props.open){
        return null
    }

    return(
        <div className="modal-container">
            <div className="modal">
                <div className="center">
                    <div className="close-container">
                        <button className="counter" type="submit" onClick={props.onClose} >X</button>
                    </div>
                    <img src={register} alt="Imagen de registro" className="img-modal img-modal-admin" />
                    {props.children}
                </div>
            </div>
        </div>
    )

}
                    
export const ShowProduct = (props) => {
    const product = props.item
    if(!props.open){
        return null;
    }
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="close-container">
                    <button onClick={props.onClose} className="counter">x</button>
                </div>
                <form className="form-container center">
                    <label htmlFor="prodName" className="label-content">NOMBRE</label>
                    <input type="text" id="prodName" value={product.name} className="input-content" readOnly/>

                    <label htmlFor="prodId" className="label-content">ID</label>
                    <input type="text" id="prodId" value={product.id} className="input-content" readOnly/>

                    <label htmlFor="prodImage" className="label-content">IMAGEN</label>
                    <input type="image" id="prodImage" src={product.image} alt="menu" className="card-item"/>

                    <label htmlFor="prodPrice" className="label-content">PRECIO</label>
                    <input type="text" id="prodPrice" value={product.price} className="input-content" readOnly/>

                    <label htmlFor="prodType" className="label-content">TIPO DE MENÚ</label>
                    <input type="text" id="prodType" value={product.type} className="input-content" readOnly/>

                    <label htmlFor="creation" className="label-content">FECHA DE CREACIÓN</label>
                    <input type="datetime" id="creation" value={product.dateEntry} className="input-content" readOnly/>
                </form>
                <div>
                    <button className="btn-modal" onClick={props.update}>Editar</button>
                    <button className="btn-modal delete">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
