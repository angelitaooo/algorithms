// Haz una función que te devuelva la suma de todos los `total`

const data = [
    {id: 1, total: 3},
    {id: 2, total: 4},
    {id: 3, total: 35},
    {id: 4, total: -3},
    {id: 5, total: 53},
    {id: 6, total: 30},
    {id: 7, total: 11},
    {id: 8, total: 1}
]

function sumtotal(array) {
    return array.reduce((acc, cur) =>  acc + cur.total, 0);
}
 
const result = sumtotal(data);

console.log(result);

// result = 134
 