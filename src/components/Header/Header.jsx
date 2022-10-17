import logOut from "../../Images/logout.png"
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const path = props.path

    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(path)
    }



    return (
        <>
            <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <button className="btn-header" onClick={handleClick}>Menú</button>
                <button className="btn-header active" onClick={handleClick}>Ver pedidos</button>
                <img src={logOut} alt="logOut" className="log-out" />
            </header>
        </>
    )
}

export default Header;