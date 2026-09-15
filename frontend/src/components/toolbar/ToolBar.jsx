// Componentes
import ToolBarSearchField from "./ToolBarSearchField"
import ToolBarActions from "./ToolBarActions"
import ToolBarSelectorField from "./ToolBarSelectorField"
// Estilização
import "./ToolBar.css"



const ToolBarRoot = ({ children })=>{
    return <nav className="">{children}</nav>
}

const ToolBar = {
    'Root': ToolBarRoot,
    'SearchField': ToolBarSearchField,
    'Actions': ToolBarActions,
    'SelectorField': ToolBarSelectorField
}

export default ToolBar
