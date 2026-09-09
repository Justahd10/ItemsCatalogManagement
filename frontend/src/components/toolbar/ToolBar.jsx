// Componentes
import ToolBarSearchField from "./ToolBarSearchField"
import { ToolBarActions, ToolBarAction } from "./ToolBarActions"
// Estilização
import "./ToolBar.css"



const ToolBarRoot = ({ children })=>{
    return <nav>{children}</nav>
}

const ToolBar = {
    'Root': ToolBarRoot,
    'SearchField': ToolBarSearchField,
    'Actions': ToolBarActions,
    'Action': ToolBarAction
}

export default ToolBar