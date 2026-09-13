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

    urlParams.itemName?  
    url = url + `name=${urlParams.itemName}` : url + url + ""

    for (const attr of urlParams.attributes){
        url = url + `&${attr.filterName}=${attr.filterValue}`
    }
  
    return url
}

export default function useItemsSearch(){
    // montagem dos parâmetros e da chave de consulta
    const { urlParams } = useContext(ItemsSearchContext)

    const queryParams = resolveSearchParams(urlParams)

    // Consulta dos itens
    const query = useQuery({
        'queryKey': ['items', queryParams],
        'queryFn': ()=> getItems(queryParams),
    })
    
    return { query }
}
