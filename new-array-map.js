// create a function for:
// const result = fn(data) // => [ { name: 'alejandro'}, { name: 'angelita' } ]


const data = [
    {id: 1, name: 'alejandro', age: 31},
    {id: 2, name: 'angelita', age: 28}
  ];


  function createArray(array) {
   return array.map(arr => ({name: arr.name}))
  }

  const result = createArray(data);

  console.log(result);