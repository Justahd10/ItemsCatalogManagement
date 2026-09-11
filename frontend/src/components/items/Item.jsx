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

const ItemsRoot = ({ children })=>{
    return <section className="">{children}</section>
}

const Items ={
    'Root': ItemsRoot,
    'Item': {
        'Root': ItemRoot,
        'Info': ItemInfo,
        'Actions': ItemActions
    }
}


export default Items