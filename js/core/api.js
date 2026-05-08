const API_URL = 'https://rickandmortyapi.com/api';

/* 
@param {number} page // El número de página a solicitar.
@param {Object} filters // Objeto con filtros opcionales (name, status).
@returns (Promise<Object>} //Datos de los personajes o error.

*/
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
        console.error('Error en la petición API: ',error);
        return{error: 'No se pudieron cargar los personajes.'};

    }


}