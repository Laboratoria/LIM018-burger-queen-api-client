import logOut from "../../Images/logout.png";
import "./Header.css";

const Header = (prop) => {
    const activeM = prop.activeMenu;
    const activeO = prop.activeOrder;

    
    return (
        <header className="header">
            <h1 className="burger">BURGER QUEEN</h1>
          
            <a href="/menu" className={`btn-header ${activeM}`}>Menú</a>
            <a href="/orders" className={`btn-header ${activeO}`}>Ver pedidos</a>
            <a href="/"><img src={logOut} alt="logOut" className="log-out"/></a>

        
            {/* <button className="btn-header active" >Menú</button>
            <button className="btn-header" >Ver pedidos</button> */}
            
        </header>
    )
}

export default Header;