// Estilização
import "./Item.css"



const ItemInfo = ({id, name })=>{
     return (
        <div className="">
            <h3 className="">ID: {id}</h3>
            <p className="">{name}</p>
        </div>
    )
}

export default ItemInfo