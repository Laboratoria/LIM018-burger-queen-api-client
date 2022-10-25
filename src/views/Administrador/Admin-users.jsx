import '../../components/Buttons/Button.css';
import Header from "../../components/Header/Header";
import user from "../../Images/user.png"
import managerImg from "../../Images/manager.png";
import editImg from "../../Images/edit.png"
import deleteImg from "../../Images/delete.png"
import './Administrador.css'


export const AdminViewUsers = () => {
  
    return (
        <section className="waiter">
            <Header log={managerImg} path="/admin-users" active1= "active" first = "Ver usuarios" second = "Ver pedidos"/>
            <button className='btn-create-user'>Crear usuario <img className="img-create-user" src={user} alt="user" /></button>
            <div className="content-names">
                <div className='user-table'>
                    <table>
                        <tbody>
                            <tr className='etiquetas'>
                                <th>Nombre y Apellido</th>
                                <th>Usuario</th>
                                <th>Función</th>
                                <th></th>
                                <th></th>
                            
                            </tr>
                            <tr className='content'>
                                <th>Pamela Rojas</th>
                                <th>pamela@burgeer.queen</th>
                                <th>Mesero</th>
                                <th><img className='img' src={editImg} alt="edit"/></th>
                                <th><img className='img' src={deleteImg} alt="delete"/></th>
                                
                            </tr>
                            <tr className='content'>
                                <th>Linda Lopez Li</th>
                                <th>linda@burgeer.queen</th>
                                <th>Cheff</th>
                                <th><img className='img' src={editImg} alt="edit"/></th>
                                <th><img className='img' src={deleteImg} alt="delete"/></th>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="back-blur"></div>
        </section>  
    );
}
  
