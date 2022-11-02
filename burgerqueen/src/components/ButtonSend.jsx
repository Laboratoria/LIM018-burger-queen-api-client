
export default function ButtonSend(props) {
 
  return (
   <button   id={props.id} onClick = {props.onClick}>
    {props.title}
   </button>
  )
}
