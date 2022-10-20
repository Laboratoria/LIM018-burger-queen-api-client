import '../../components/Buttons/Button.css';
import Header from "../../components/Header/Header";
import user from "../../Images/user.png"


export const AdminView = () => {
  
   
    return (
        <section className="waiter">
            <Header path="/admin" opcion1 = "Ver usuarios" opcion2 = "Ver pedidos"/>
            <button >Crear usuario <img className="img-user" src={user} alt="user" /></button>
            <div className="content-names">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre y Apellido</th>
                                <th>Usuario</th>
                                <th>Función</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="back-blur"></div>
        </section>  
    );
}
  
