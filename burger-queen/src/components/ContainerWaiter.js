/* eslint-disable jsx-a11y/alt-text */
import cafe from '../img/cafe.png';
import add from '../img/add.png';
import cafeleche from '../img/cafeconleche.png';
import jamonyqueso from '../img/emparedado.png';
import jugofruta from '../img/jugofrutas.png';
import style from '../css/containerWaiter.module.css'

function containerWaiter(){
    return(
        <div className={style.foodBreakfast}>
            <div className = {style.break}>
            <div className = {style.contentBreak}>
                <img className = {style.imgBreak} src={cafe} alt="cafe" title="cafe"></img>
                <h5>Cafe americano</h5>
                <span>$</span>
                12
                <img className={style.add} src={add} alt="add" title="add"></img>
            </div>
            <div className = {style.contentBreak}>
                <img src={cafeleche} alt="cafe" title="cafe"></img>
                <h5>Cafe con leche</h5>
                <span>$</span>
                12
                <img className={style.add} src={add} alt="add" title="add"></img>
            </div>
            </div>
            <div className = {style.break}>
            <div className = {style.contentBreak}>
                <img src={jamonyqueso} alt="cafe" title="cafe"></img>
                <h5>Sandwich de jamon y queso </h5>
                <span>$</span>
                12
                <img className={style.add} src={add} alt="add" title="add"></img>
            </div>
            <div className = {style.contentBreak}>
                <img src={jugofruta} alt="cafe" title="cafe"></img>
                <h5>Jugo de frutas </h5>
                <span>$</span>
                12
                <img className={style.add} src={add} alt="add" title="add"></img>
            </div>
            </div>
        </div>
    )
}

export default containerWaiter;