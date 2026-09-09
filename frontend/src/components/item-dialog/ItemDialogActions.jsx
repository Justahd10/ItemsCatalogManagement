import "./ItemDialog.css"



export const DialogAction = ({ label })=>{
  return (
    <button className="" type="submit">
      {label}
    </button>
  )
}


const ItemDialogActions = ({ children })=>{
  return <div className="">{children}</div>
}

export default ItemDialogActions