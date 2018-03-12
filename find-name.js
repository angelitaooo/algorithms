// Haz una funcieon que reciba dos parámetros, data= [{name: string}] y un nombre: string.

// La función debe buscar el `nombre` y `data` si lo encuentra debe devolver, "Found" y sino, "Not Found".
// Ejemplo
// function finder(data, name) {...}

// const data = [{ name: 'ale' }, {name: 'mapita'}]

// finder(data, 'ale') // "Found"
// finder(data, 'ange') // "Not Found"

const data = [{ name: 'ale' }, {name: 'mapita'}]

function finder(data, name) {
    return data.filter((data, name) => ({data.name: name}))
}
 
const result = finder(data, 'ale');

console.log(result);