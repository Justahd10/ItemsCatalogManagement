// Hooks nativos
import { useContext } from "react"
// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearch"
// Estilização
import "./SideBarFilter.css"



const SideBarFilter = ({ label, attrName, children })=>{
    const { handleFilterSearch } = useContext(ItemsSearchContext)

    const onChange = (e)=>{
        handleFilterSearch(
            { 'name': attrName, 'value': e.target.name }, 
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