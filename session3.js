//Arithmetic operators
let x=2;
let y=3;
let z=x+y;

console.log(z);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x++);


//increment and decrement

let a= x++;//post fix
let b=++y;//prefix

console.log(a);
console.log(b)

//comparison operator

let num1=5;
let num2=5;

if (num1==num2) {
    console.log("equal");
    
} else {
    console.log(" not equal");

}

let num3="5";
if (num1===num3) {//comparing datatypes
    console.log("equal");
    
} else {
    console.log(" not equal");

}

//!= not equal

if (num1!=num3) {//comparing datatypes
    console.log("not equal");
    
} else {
    console.log(" equal");

}

//>
if (num1>num3) {//comparing datatypes
    console.log("first number is greater");
    
} else {
    console.log("second number is greater");

}

//<

if (num1<num3) {
    console.log("first number is smaller");
    
} else {
    console.log("second number is smaller");

}

//<=

if (num1>=num3) {
    console.log("first number is greater or equal");
    
} else {
    console.log("second number is greater or equal");

}

//<=

if (num1<=num3) {
    console.log("second number is greater or equal");
    
} else {
    console.log("first number is greater or equal");

}

//logical operators


//object


let person={

    name:"Anjali",
    age:30,
    place:"tvm"
}

console.log(person)


let personDet={

    name:"Anjali",
    age:30,
    address:{
        street:"xyz",
        city:"abc",
        pin:1234
    }
}

console.log(personDet.address.street)

var car= new Object();

car.brand="maruthi";

console.log(car.brand);

let arry=["abc"];
let l=arry.length;//finding array length

/*
    verbose comment
    
*/

console.log(l)

//array of objects

const fruits=[

    {   name:"apple",  price:200},
    {   name:"banana", price:100},
    {   name:"mango",  price:300}
];

console.log(fruits[1].name);

function sum(a,b){
    c=a+b;
    console.log(c)//  return c;
}
sum(2,4);

function greet(a){
    
    console.log("hello "+a)
}
sum(2,4);
greet("john");

function square(a){
    return a*a;
}
let sq=square(5);
console.log(sq);

function farenTocelcius(a){
    return (a-32)*(5/9);
}
let tc=farenTocelcius(100);
console.log(tc);

/*
POP,SHIFT,SLICE
*/

//pop- delete lasdt element
let letters=['a','b','c'];
//letters.pop();
console.log(letters);

//shift- delete first element

letters.shift();
console.log(letters);


