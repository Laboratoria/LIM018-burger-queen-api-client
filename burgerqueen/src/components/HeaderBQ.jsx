import barista from "../imagens/barista.png";
import apagar from "../imagens/apagar.png";
import perfil from "../imagens/perfil.png";
import '../styles/HeaderBQ.css'
import { useNavigate } from "react-router-dom";

export default function HeaderBQ() {
  const navigate = useNavigate();

  const logOut = () =>{
    navigate('/')
  }

  const profileUser = () =>{
    navigate('/perfil')
  }

  return (
    <nav>
      <div className='navbar-left'>
        <img src={barista} alt='logo' className='coffeGirl' />
      
        <div className='nav-titles'>
          <p className='nav-title-first'>Burger</p>
          <p className='nav-title-second'>Queen</p>
        </div>
      </div>
      <div className='navbar-center'>
        <p className='user-name'>
          <i>Hola ?</i>
        </p>
      </div>
      <div className='navbar-right'>
        <img onClick={profileUser} src={perfil} alt='profile icon' className='profileIcon' />
        <img onClick={logOut} src={apagar} alt='log out icon' />
      </div>
    </nav>
  );
}
