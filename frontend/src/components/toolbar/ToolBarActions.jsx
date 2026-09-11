// Contextos
import { DialogContentContext } from "../../contexts/DialogContext"
// Hooks nativos
import { useContext } from "react"
// Estilizações
import "./ToolBar.css"



const ToolBarActionsRoot = ({ children })=>{
    return <div className="">{children}</div>
}

const CreateItem = ({ dialogRef })=>{
    const { setDialogType } = useContext(DialogContentContext)

    return (
        <button type='button' onClick={()=>{
            setDialogType("createItem")

            dialogRef.current.showModal()
        }}>
            Novo Item
        </button>
    )
}


const ToolBarActions ={
    'Root': ToolBarActionsRoot,
    'CreateItem': CreateItem
}

export default ToolBarActions 