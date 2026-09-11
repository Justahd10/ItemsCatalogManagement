// Hooks nativos
import { useContext } from "react"
import { useForm } from "react-hook-form"
// Contextos
import { ItemsSearchContext } from "../../contexts/ItemsSearchContext"
// Estilização
import "./ToolBar.css"



const ToolBarSearchField = ({ label })=>{
    const { handleNameSearch } = useContext(ItemsSearchContext)
    const { register, handleSubmit } = useForm({
        'defaultValues': {'item_name': ""},
    })
    
    const onSubmit = (data)=> handleNameSearch(data.item_name)
    
    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <label className="">
                <input className="" type="text"
                {...register("item_name")}
                placeholder={label || "pesquisar"}/>
            </label>

            <label className="">
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>
                </button>
            </label>
        </form>
    )
}

export default ToolBarSearchField