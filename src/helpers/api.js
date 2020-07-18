export const get = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'secret-key':'$2b$10$sIjK0veZyKLLlLUI1kCBxeCG.Gz.Qsjezur4hXi4SVXm9HIJm6ptm'
        }
    })
    return response.json();
}