// Componentes
import ItemInfo from "./ItemInfo"
import ItemActions from "./ItemActions"
// Estilização
import "./Item.css"



const ItemRoot = ({ children })=>{
    return (
        <article className="">
            {children}
        </article>
    )
}

const Item = {
    'Root': ItemRoot,
    'Info': ItemInfo,
    'Actions': ItemActions
}

export default Item