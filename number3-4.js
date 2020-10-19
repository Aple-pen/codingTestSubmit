//재귀함수 구현

function factorial(number){
    if(number>0) return number * factorial(number-1);
    else return 1;
}
var result = factorial(4);
console.log(result);

//반복문 구현
function factorial(number){
    var result = 1;
    for (var i = 1; i <= number; i++){
       result *= i;
    }
    return result;
}
var result = factorial(1000);
console.log(result);



//꼬리 재귀함수 구현

function factorialTail(number,acc){
    if(number === 1) return acc;
    return factorialTail(number-1,acc*number)
}
function  factorial(number){
    return factorialTail(number,1)
}
var result = factorial(100);
console.log(result);