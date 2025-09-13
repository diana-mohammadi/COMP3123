//exercise 1
const gretter = (myArray, counter) => {

    let greetText= "Hello ";
    for (const element of myArray){
        console.log(greetText+element)
    }

}
gretter(['Randy Savage', "Ric Flair", "Hulk Logan"], 3);

//exercise 2
function capitalize(word){
    const [first, ...rest]=word;
    return first.toUpperCase()+rest.join('');
}
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));


//exercise 3
function capitalizeMap(color){
     const [first, ...rest]=color;
    return first.toUpperCase()+rest.join('');
}
const colors=["red", "green", "blue"];
const capitalizedColors=colors.map(capitalizeMap);
console.log(capitalizedColors);


//exercise 4
function filterFunction(num){
    if(num<20){
        return num;
    }
}
var values=[1,60,34,30,20,5];
const filterLessThan20= values.filter(filterFunction);
console.log(filterLessThan20);

//exercise 5 
var array=[1,2,3,4];
const calculateSum=array.reduce((acc, curr) => acc+curr, 0);
const calculateProduct=array.reduce((acc, curr)=> acc*curr, 1)
console.log(calculateSum);
console.log(calculateProduct);

//exercise 6
class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;

    }
    details() {
        return "Model:"+ this.model +" Engine "+this.year;

    }
}
class Sedan extends Car{
    constructor(model,year, balance){
        super(model,year);
        this.balance=balance;
    }

    info() {
        return this.model +" has a balance of "+formatCurrency(this.balance);
         
    }
}
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}
const car2= new Car("Pontiac Firebird", 1976);
console.log(car2.details())
const sedan=new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
