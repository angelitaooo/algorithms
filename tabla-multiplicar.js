function solution(num) {
    if(num <= 0) {
        return "ingresa numeros mayores a 0";
    } 

    var operacion ='';
    for (var i = 1; i <=10; i++) {
        var resultado = num * i;
        operacion += `${num} * ${i} = ${resultado}\n`;
    }   
    return operacion;
}

console.log(solution(0));
console.log(solution(-4));
console.log(solution(4));
console.log(solution(40));