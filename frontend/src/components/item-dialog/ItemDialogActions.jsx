// Estilização
import "./ItemDialog.css"



const ItemDialogActionsRoot = ({ children })=>{
  return <div className="">{children}</div>
}

const CancelAction = ({ dialogRef })=>{
  return (
    <button className="" type="button" 
    onClick={()=> dialogRef.current.close()}
    >
      Cancelar
    </button>
  )
}

const SubmitAction = ({ label, formId })=>{
  return (
    <button className="" type="submit" form={formId}>
      {label}
    </button>
  )
}


const ItemDialogActions ={
  'Root': ItemDialogActionsRoot,
  'Cancel': CancelAction,
  'Submit': SubmitAction
}

export default ItemDialogActions