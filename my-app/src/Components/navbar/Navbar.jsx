import beforeImg from '../../Pictures/before.png'
import nextImg from '../../Pictures/next.png'
import listImg from '../../Pictures/lista.png'
import logo from '../../Pictures/logo.png'
import './navbar.css'

//navbar
export const  Navbar = ()=> {
    return (
        <section>
            <div className="navbar">
                <div className="containerCenter">
                    <div className="logo"><img src={logo} className="logoImg" /></div>
                </div>
                <div className="containerRigth">
                    <div className="list"><img src={listImg} className="listImg" /></div>
                    <div className="next"><img src={nextImg} className="nextImg" /></div>
                </div>
            </div>
        </section>
    )
}
