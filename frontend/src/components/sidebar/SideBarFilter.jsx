// Hooks nativos
import { useContext } from "react"
// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearchContext"
// Estilização
import "./SideBar.css"



const SideBarFilter = ({ label, attrName, children })=>{
    const { handleFilterSearch } = useContext(ItemsSearchContext)

    const onChange = (e)=>{
        handleFilterSearch(
            { 'filterName': attrName, 'filterValue': e.target.name }, 
            e.target.checked
        )
    }

    return (
        <div className="" onChange={onChange}>
            <h3 className="">{label}</h3>
            <div className="">{children}</div>
        </div>
    )
}

export default SideBarFilter