import { createContext, useReducer } from "react";



// Atualizador do contexto
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
                    ...search.value
                }
            }

        case "ordenation":
            return {
                ...urlParams,
                'ordenation': {
                    ...urlParams.ordenation,
                    ...search.value
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
            },
            'ordenation': {
                '_sort': "id",
                '_order': "asc"
            }
        }
    )

    // Tipos de atualizações do contexto
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
            'value': paginationValue
        })
    }

    function handleOrdenation(ordenationValue){
        const value = ordenationValue.split("-")

        dispatch({
            'type': "ordenation",
            'value': {
                '_sort': value[0], 
                '_order': value[1]
            }
        })
    }

    return (
        <ItemsSearchContext.Provider  value={{  
            urlParams, 
            handleNameSearch,
            handleFilterSearch, 
            handlePagination,
            handleOrdenation
        }}>
            {children}
        </ItemsSearchContext.Provider>
    )
}
