// Componentes
import SideBarFilter from "./SideBarFilter"
import SideBarFilterItem from "./SideBarFilterItem"
// Estilização
import "./SideBar.css"



const SideBarRoot = ({ children })=>{
    return <nav className="">{children}</nav>
}


const SideBar = {
    'Root': SideBarRoot,
    'Filter': SideBarFilter,
    'FilterItem': SideBarFilterItem
}

export default SideBar