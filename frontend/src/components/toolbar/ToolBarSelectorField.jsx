// Hooks nativos
import { useContext } from "react"
// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearchContext"
// Estilização
import "./ToolBar.css"



const ToolBarSelectorField = ({ name, label, children })=>{
    // Contexto de pesquisa de itens
    const {
        handlePagination, handleOrdenation
    } = useContext(ItemsSearchContext)

    const selectors ={
        'perPage': (value)=> handlePagination(
            { 'perPage': value }
        ),
        'ordenation': handleOrdenation
    }

    return (
        <label className="">
            <span className="">{label}</span>
            <select className="" name={name}
            onChange={(e)=>{
                selectors[name](e.target.value)
            }}>
                {children}
            </select>
        </label>
    )
}

export default ToolBarSelectorField