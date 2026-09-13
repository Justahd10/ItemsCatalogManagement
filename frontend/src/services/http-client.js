function buildRequestResult(code, error, response){
    const result = {
        'status': "successful",
        'error': error,
        'response': response,
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
        const headers = await response.headers
        const code = await response.status

        return buildRequestResult(code, null, {
            'payload': data, 'headers': {
                'totalItems': headers.get("X-Total-Count")
            }
        })

    } catch (e){
        return buildRequestResult(null, e.message)
    }
}

export async function createItem(values){
    try {
        const response = await fetch(`http://localhost:3000/items`, {
            'method': "POST",
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(values)
        })
        const data = response.json()
        const code = response.status

        return buildRequestResult(code, null, {
            'payload': data
        })

    } catch (e){

    }

}

export async function updateItem(id, newValues){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            'method': "PATCH",
            'headers': {
                'Content-Type': "application/json"
            },
            'body': JSON.stringify(newValues)
        })
        const code = response.status

        return buildRequestResult(code, null)

    } catch (e){
        return buildRequestResult(null, e.message)
    }
}

export async function deleteItem(id){
    try {
        const response = await fetch(`http://localhost:3000/items/${id}`, {
            'method': "DELETE"
        })
        const code = response.status

        return buildRequestResult(code, null)

    } catch (e){
        return buildRequestResult(null, e.message)
    }
}
