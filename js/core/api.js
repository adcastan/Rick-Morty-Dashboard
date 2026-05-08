const API_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(page = 1, filters = {}) {
    //toco la url de la peticion
    let url = `${API_URL}/character?page=${page}`;

    if (filters.name) url += `&name=${filters.name}`
    if (filters.status && filters.status!=='all') url += `&status=${filters.status}`;

    try{
        const response = await fetch(url);
        return await response.json();
    }
    catch(error){
        return{};

    }


}