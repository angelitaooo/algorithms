/**
Having:
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g']

You should console.log two arrays:

['a', 'c', 'e', 'g'] and ['b', 'd', 'f']

The first array should have only the EVEN indexes in the first array positions: 0,2,4,6,....
The second array should have only the ODD indexes in the first array positions: 1,3,5,7,....
*/

const arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g']
function solution(anArray) {
  const odd = [];
  const even = [];

	anArray.forEach((element, index) => {
      if (index%2 === 0) {
        even.push(element);
      } else {
        odd.push(element);
      }      
    });
    console.log(even);
    console.log(odd)
  
}

solution(arr);