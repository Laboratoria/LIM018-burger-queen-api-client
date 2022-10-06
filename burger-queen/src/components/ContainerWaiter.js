/* eslint-disable jsx-a11y/alt-text */

//import add from '../img/add.png';
import style from '../css/containerWaiter.module.css'

function containerWaiter(props) {
    const items = props.items

    const fullMenu = items.map(item =>{
        return(
            <div className={style.contentBreak} key={item.id}>
                <img className = {style.imgBreak} src={item.img} alt={item.name} title="cafe"/>
                <p>{item.name}</p>
                <p>S/.{item.price}</p>
            </div>
        )
    })
    
    return(
        <div className={style.menuContainer}>
            {fullMenu}
        </div>
    )
}

export default containerWaiter;