import logOut from "../../Images/logout.png"
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = (props) => {
    const path = props.path;
    const path2 = props.path2;
    const path3 = props.path3;

    const navigate = useNavigate();

    const toLogin = () => {
        navigate("/");
        localStorage.clear();
    };

    return (
        <>
            <header className="header">
                <h1 className="burger">BURGER QUEEN</h1>
                <img src={props.log} alt="imag" className="rol" />
                <button className={`btn-header ${props.active1}`} onClick={()=> navigate(path)}>{props.first}</button>
                <button className={`btn-header ${props.active2}`} onClick={()=>navigate(path2)}>{props.second}</button>
                <button className={`btn-header hide ${props.display} ${props.active3}`} onClick={()=>navigate(path3)}>{props.third}</button>
                <img src={logOut} alt="logOut" className="log-out" onClick={toLogin}/>
            </header>
        </>
    )
}

export default Header;