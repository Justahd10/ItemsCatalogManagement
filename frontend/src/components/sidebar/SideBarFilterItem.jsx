// Estilização
import "./SideBarFilterItem.css"



const SideBarFilterItem = ({ label, name })=>{
    return (
        <label className="" >
            <input type="checkbox" name={name}/>
            <span className="">{label}</span>
        </label>
    )
}

export default SideBarFilterItem