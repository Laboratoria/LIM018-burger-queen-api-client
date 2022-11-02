import comidaChatarra from "../imagens/comidaChatarra.png";
import cafedesayuno from "../imagens/cafedesayuno.png";
import cocina from "../imagens/cocina.png";
import '../styles/OptionMenu.css'
import { useNavigate } from "react-router-dom";


export default function OptionMenu() {
    const navigate = useNavigate();

    const toDesayunos = () =>{
      navigate("/menu");
    }
    const toEspeciales = () =>{
      navigate("/menu");
    }

    const toCocina = () =>{
      navigate("/chef");
    }


  return (
    <div className='options-container'>
      <div className='options'>
        <button onClick={toDesayunos} className='iconMenu'>
          {" "}
          <img src={cafedesayuno} alt='icondesayuno' className='imgMenu' />
        </button>
        <button onClick={toEspeciales} className='iconMenu'>
          <img src={comidaChatarra} alt='iconEspeciales' />
        </button>
        <button onClick={toCocina} className='iconMenu'>
          <img src={cocina} alt='iconCocina' />
        </button>
      </div>
    </div>
  );
}
