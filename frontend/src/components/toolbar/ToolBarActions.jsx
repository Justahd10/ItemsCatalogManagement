// Estilizações
import "./ToolBarActions.css"



export const ToolBarActions = ({ children })=>{
    return <div className="">{children}</div>
}

export const ToolBarAction = ({ label, onClick })=>{

    return (
        <button type='button' onClick={onClick}>
            {label}
        </button>
    )
}
