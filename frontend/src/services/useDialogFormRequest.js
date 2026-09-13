// Query Client
import { useMutation, useQueryClient } from "@tanstack/react-query"
// Contextos
import { DialogContentContext } from "../contexts/DialogContext"
// Hooks nativos
import { useContext } from "react"
// HTTP Client
import { createItem, updateItem, deleteItem } from "./http-client"



export default function useDialogFormRequest(mutationType, itemId){
    // Referência para fechamento automático do dialog em onSuccess
    const { dialogRef } = useContext(DialogContentContext)

    // Mapeamento das mutações de dados
    const mutations ={
        'createItem': {
            'mutationFn': (formData) => createItem(formData),
            'mutationKey': ['items', 'POST']
        },
        'deleteItem': {
            'mutationFn': ()=> deleteItem(itemId),
            'mutationKey': ['items', 'DELETE']
        },
        'editItem': {
            'mutationFn': (formData)=> updateItem(itemId, formData),
            'mutationKey': ['items', 'PATCH']
        }
    }

    const queryClient = useQueryClient()

    // Verifica se a query contem o item
    function checkQuery(query){
        const items = query.state.data.payload
        return items.some(item => item.id === itemId)
    }

    // Direciona o tipo de atualização
    function handleQueryInvalidation(){
        mutationType === "createItem"?
        // Atualiza todas as querys
        queryClient.invalidateQueries(['items']) :
        // Atualiza as querys que contem o item
        queryClient.invalidateQueries({
            'queryKey': ['items'],
            'exact': false,
            'predicate': checkQuery
        })
    }
    
    const mutation = useMutation({
        'mutationFn': mutations[mutationType].mutationFn,
        'mutationKey': mutations[mutationType].mutationKey,

        // Atualização do cache pós mutação bem-sucedida
        'onSuccess': ()=>{
            dialogRef.current.close()
            handleQueryInvalidation()
        },
        
    })

    return { mutation }
}
