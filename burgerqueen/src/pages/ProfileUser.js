import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import HeaderBQ from "../components/HeaderBQ";

export default function PerfilUsuario() {

    const {id} = useParams();
    const navigate = useNavigate();
    const toReturn = () => {
        navigate('/desayunos');
    };
    
  return (
    <>
      <HeaderBQ/>
      <div className="photo">
    

      Colaborador <h1>{id}</h1>
      </div>
    <button onClick = {toReturn}>Salir</button>
    </>

  )
}
