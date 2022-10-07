
export const MenuButton = (props) => {
    const buttonTitle = props.title;
    const background = props.bg;
    const createCards = props.createCards

    return (
        <button 
        type = 'button' 
        className={`btn-menu ${background}`} 
        onClick = {createCards}
        > {buttonTitle} </button>
    )
}


