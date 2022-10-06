
export const MenuButton = (props) => {
    const buttonTitle = props.title;
    const background = props.bg;
    return (
        <button type = 'button' className={`btn-menu ${background}`} >{buttonTitle}</button>
    )
}


