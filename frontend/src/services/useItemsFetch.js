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

    // Ordenação
    const { _sort, _order } = urlParams.ordenation
    url = url + `_sort=${_sort}&_order=${_order}`

    // Paginação
    const { perPage, currentPage } = urlParams.pagination
    url = url + `&_limit=${perPage}&_page=${currentPage}`

    // Pesquisa por nome de item
    urlParams.itemName?  
    url = url + `&name_like=${urlParams.itemName}` : url + url + ""

    // Filtro por atributos do item
    for (const attr of urlParams.attributes){
        url = url + `&${attr.filterName}=${attr.filterValue}`
    }
  
    return url
}

export default function useItemsSearch(){
    // montagem dos parâmetros e da chave de consulta
    const { urlParams } = useContext(ItemsSearchContext)

    // Monta a url para listagem dos itens
    const queryParams = resolveSearchParams(urlParams)

    // Consulta dos itens
    const query = useQuery({
        'queryKey': ['items', queryParams],
        'queryFn': ()=> getItems(queryParams),
    })
    
    return { query }
}
