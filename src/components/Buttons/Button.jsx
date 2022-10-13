
export const MenuButton = (props) => {
    const buttonTitle = props.title;
    const background = props.bg;
    const changeType = props.changeType

    return (
        <button 
        type = 'button' 
        className={`btn-menu ${background}`} 
        onClick = {changeType}
        > {buttonTitle} </button>
    )
}


