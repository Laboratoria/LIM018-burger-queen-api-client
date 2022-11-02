import ups from "../imagens/ups.png";
import '../styles/NotFoundPage.css'


export default function NotFoundPage() {
  return (
    <div className="notFound" >
      <img src={ups} alt="error 404" className="imgError"/>
      <p className="textError">Error 404 Pagina no encontrada</p>
      
    </div>
  )
}
