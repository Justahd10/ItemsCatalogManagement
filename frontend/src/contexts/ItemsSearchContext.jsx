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
                    search.filterItem
                ]
            }

            const newAttrs = urlParams.attributes.filter(
                item => 
                    item.filterValue !== search.filterItem.filterValue
            )

            return {
                ...urlParams,
                'attributes': newAttrs
            }
        
        case "pagination":
            return {
                ...urlParams,
                'pagination': {
                    ...urlParams.pagination,
                    ...search.paginationValue
                }
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
            'attributes': [],
            'pagination': {
                'currentPage': 1,
                'perPage': 10,
            }
        }
    )

    // reducer functionalitys
    function handleNameSearch(itemName){
        dispatch({
            'type': 'nameChange',
            'itemName': itemName
        })
    }

    function handleFilterSearch(filterItem, checked){
        dispatch({
            'type': 'filter',
            'filterItem': filterItem,
            'checked': checked
        })
    }

    function handlePagination(paginationValue){
        dispatch({
            'type': "pagination",
            'paginationValue': paginationValue
        })
    }

    return (
        <ItemsSearchContext.Provider  value={{  
            urlParams, handleNameSearch,
            handleFilterSearch, handlePagination
        }}>
            {children}
        </ItemsSearchContext.Provider>
    )
}
