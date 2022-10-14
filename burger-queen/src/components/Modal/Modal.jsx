export default function Modal({children}) {
    return (
        <div className="Background-modal">
            <div className="Modal-card">
                <p> Error</p>
                {children}
            </div>
        </div>
    )
}