import React from "react";
import "./Modal.css";
import check from "../../Images/cheque.png";
import ekis from "../../Images/borrar.png";


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