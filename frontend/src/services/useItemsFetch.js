// Hooks nativos
import { useEffect, useContext, useState } from "react";
// Contextos
import { ItemsSearchContext } from "../contexts/ItemsSearch";



// auxiliar na resolução da URL
function resolveSearchParams(urlParams){
    let url = "http://localhost:3000/items?"
    if (urlParams.itemName){
        url = url + `name=${urlParams.itemName}`
    }

    for (const attr of urlParams.attributes){
        url = url + `&${attr.name}=${attr.value}`
    }
  
    return url
}

export default function useItemsSearch(){
    const [datas, setDatas] = useState(null)
    const { urlParams } = useContext(ItemsSearchContext)

    // Busca de itens no endpoint montado
    useEffect((urlParams)=>{
        const endpoint = resolveSearchParams(urlParams)

        // HTTP Client
    }, [urlParams])

    return { datas }
}
