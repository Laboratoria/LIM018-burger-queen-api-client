import React from "react";
import "./Modal.css"

export const Modal = (props) => {
    if(!props.open){
        return null
    }
    return(
        <div className="modal-container">
            <div className="modal">
                <div className="center">
                    <img src={props.imgModal} alt="respuesta" className="img-modal" />
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
                    <img src={props.imgModal} alt="respuesta" className="img-modal" />
                    <p>{props.message}</p>
                </div>
                <div className="center">
                    <button className="btn-modal" onClick={props.onClose}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}