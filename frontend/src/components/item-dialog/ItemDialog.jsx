// Componentes
import ItemDialogActions from "./ItemDialogActions"
import ItemDialogHeader from "./ItemDialogHeader"
import ItemDialogForm from "./ItemDialogForm"
// Estilização
import "./ItemDialog.css"



const ItemDialogRoot = ({ children })=>{
  return <dialog>{children}</dialog>
}

const ItemDialogContent = ({ children })=>{
  return <div className="">{children}</div>
}


const ItemDialog ={
  'Root': ItemDialogRoot,
  'Header': ItemDialogHeader,
  'Content': ItemDialogContent,
  'Actions': ItemDialogActions,
  'Form': ItemDialogForm
}

export default ItemDialog