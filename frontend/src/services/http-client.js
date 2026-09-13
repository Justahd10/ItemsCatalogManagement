function buildRequestResult(code, error, payload = null){
    const result = {
        'status': "successful",
        'error': error,
        'payload': payload,
        
    }

    if (code !== 200 || error){
        result.status = 'unsucessful'
    }
    
    return result
}


export async function getItems(queryParams){
    try {
        const response = await fetch(
            `http://localhost:3000/items/?${queryParams}`
        )
        const data = await response.json()
        const code = await response.status
        
        return buildRequestResult(code, null, data)

    } catch (e){
        return buildRequestResult(null, e.message)
    }
}

export async function createItem(id, values){
    try {
        fetch(`http://localhost:3000/items/${id}`, {
            'method': "POST",
            'body': JSON.stringify(values)
        })
    } catch (e){

    }

}

export async function updateItem(id, newValues){
    try {
        fetch(`http://localhost:3000/items/${id}`, {
            'method': "PATCH",
            'body': JSON.stringify(newValues)
        })
    } catch (e){

    }
}

export async function deleteItem(){
    try {
        fetch(`http://localhost:3000/items/${id}`, {
            'method': "DELETE",
            'body': JSON.stringify(newValues)
        })
    } catch (e){

    }
}
