// Hooks nativos
import { useContext } from "react";
// Contextos
import { ItemsSearchContext } from "../contexts/ItemsSearchContext";
// React Query
import { useQuery } from "@tanstack/react-query"
// HTTP Client
import { getItems } from "./http-client";



// auxiliar na resolução da URL
function resolveSearchParams(urlParams){
    let url = ""

    if (urlParams.itemName){
        url = url + `name=${urlParams.itemName}`
    }

    for (const attr of urlParams.attributes){
        url = url + `&${attr.filterName}=${attr.filterValue}`
    }
  
    return url
}

function resolveQueryKey(urlParams){
    const key = []

    if (urlParams.itemName){
        key.push(urlParams.itemName)
    }

    for (const attr of urlParams.attributes){
        key.push(`&${attr.name}=${attr.value}`)
    }

    return key
}


export default function useItemsSearch(){
    // montagem dos parâmetros e da chave de consulta
    const { urlParams } = useContext(ItemsSearchContext)

    const queryParams = resolveSearchParams(urlParams)
    const queryKey = resolveQueryKey(urlParams)

    // Consulta dos itens
    const query = useQuery({
        'queryKey': queryKey,
        'queryFn': async ()=>{
            return await getItems(queryParams)
        }
    })
    
    return { query }
}
