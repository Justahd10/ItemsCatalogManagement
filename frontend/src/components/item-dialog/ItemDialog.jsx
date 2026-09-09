// Componentes
import ItemDialogHeader from "./ItemDialogHeader"
import ItemDialogForm from "./ItemDialogForm"
import ItemDialogActions from "./ItemDialogActions"
import { DialogAction } from "./ItemDialogActions"
import { DialogNameField, DialogSelectionField } from "./ItemDialogFields.jsx"



const ItemDialogRoot = ({ label, children })=>{
  return (
    <dialog>
      <h3 className="">{label}</h3>
      {children}
    </dialog>
  )
}


const ItemDialog ={
  'Root': ItemDialogRoot,
  'Header': ItemDialogHeader,
  'Form': ItemDialogForm,
  'Actions': ItemDialogActions,
  'Action': DialogAction,
  "NameField": DialogNameField,
  'SelectionField': DialogSelectionField
}

export default ItemDialog