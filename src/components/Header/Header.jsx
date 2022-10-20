import logOut from "../../Images/logout.png"
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = (props) => {
    const path = props.path;
    const activeM = props.menuActive;
    const activeO = props.orderActive;

    const opcion1 = props.opcion1;
    const opcion2 = props.opcion2;

    const navigate = useNavigate();
    const handleClick = (e) => navigate(path);
    
    const toLogin = () => navigate("/");


    return (
        <>
            <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <button className={`btn-header ${activeM}`} onClick={handleClick}>{opcion1}</button>
                <button className={`btn-header ${activeO}`}  onClick={handleClick}>{opcion2}</button>
                <img src={logOut} alt="logOut" className="log-out" onClick={toLogin}/>
            </header>
        </>
    )
}

export default Header;