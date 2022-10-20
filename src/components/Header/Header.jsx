import logOut from "../../Images/logout.png"
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = (props) => {
    const path = props.path;
    const activeM = props.menuActive;
    const activeO = props.orderActive;

    const navigate = useNavigate();
    const handleClick = (e) => navigate(path);
    
    const toLogin = () => navigate("/");

    return (
        <>
            <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <img src={props.log} alt="imag" className="rol" />
                <button className={`btn-header ${activeM}`} onClick={handleClick}>{props.first}</button>
                <button className={`btn-header ${activeO}`}  onClick={handleClick}>{props.second}</button>
                <img src={logOut} alt="logOut" className="log-out" onClick={toLogin}/>
            </header>
        </>
    )
}

export default Header;