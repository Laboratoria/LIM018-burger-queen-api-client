/* eslint-disable jsx-a11y/anchor-has-content */
import logo from "../../img/logo.png";
import mesero from "../../img/mesero.png";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.nameLogo}>
        <img className={style.logo} src={logo} alt="logo" title="logo"></img>
        <h2 className={style.titleLogo}>BURGER QUEEN</h2>
      </div>
      <div className={style.navWaiter}>
        <a href="/products">Hacer pedidos</a>
        <a href="/orders">Ver pedidos</a>
        <img
          className={style.mesero}
          src={mesero}
          alt="mesero"
          title="mesero"
        ></img>
      </div>
    </header>
  );
}

export default Header;
