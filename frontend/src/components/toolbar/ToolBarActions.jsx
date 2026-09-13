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
    const { setDialogContent } = useContext(DialogContentContext)

    return (
        <button type='button' onClick={()=>{
                setDialogContent({
                    'type': "createItem", 'itemDatas': {}
                })

            dialogRef.current?.showModal()
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