import "./Modal.css"

export const Modal = ({children}) => {
    return (
        <article className="modal-is-open">
            <div className="modal-container">
                <h3>Modal</h3>
                <button className="modal-close">X</button>
                {children}
            </div>
        </article>
    )
}
