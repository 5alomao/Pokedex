
const offset = 0;
const limit = 0;
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

fetch(url)
    .then((response) => (response.jason()))
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) =>  console.error(error))