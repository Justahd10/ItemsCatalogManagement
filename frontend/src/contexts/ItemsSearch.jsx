// Hooks nativos
import { createContext, useReducer } from "react";



// reducerFunction
function urlParamsReducer(urlParams, search){
    switch(search.type){
        case "nameChange":
            return {
                ...urlParams,
                'itemName': search.itemName
            }
        
        case "filter":
            if (search.checked) return {
                ...urlParams,
                'attributes': [
                    ...urlParams.attributes,
                    search.value
                ]
            }

            const newAttrs = urlParams.attributes.filter(
                item => item !== search.value
            )

            return {
                ...urlParams,
                'attributes': newAttrs
            }
    }
}

export const ItemsSearchContext = createContext()

export const ItemsSearchProvider = ({ children })=>{
    // Estado do provedor
    const [urlParams, dispatch] = useReducer(
        urlParamsReducer, 
        {
            'itemName': null,
            'attributes': []
        }
    )

    // reducer functionalitys
    function handleNameSearch(itemName){
        dispatch({
            'type': 'nameChange',
            'itemName': itemName
        })
    }

    function handleFilterSearch(value, checked){
        dispatch({
            'type': 'filter',
            'value': value,
            'checked': checked
        })
    }

    return (
        <ItemsSearchContext.Provider  value={{  
            urlParams, handleNameSearch,
            handleFilterSearch
        }}>
            {children}
        </ItemsSearchContext.Provider>
    )
}
