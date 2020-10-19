class Calculator{
    number = 0;
    add(number){
        this.number += number;
        return this
    }
    subtract(number){
        this.number -= number;
        return this
    }
    out(){
        return this.number;
    }
}
var calculator = new Calculator();

var result = calculator.add(4).add(5).subtract(3).out()
console.log(result)