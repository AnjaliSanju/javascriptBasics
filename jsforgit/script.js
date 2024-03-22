console.log('hi');

// variable
var a=10;
console.log(a);

// let 

let b=12;

/*
    var is global variable, let is having block scope
    var can be redeclared, let cannot

*/
console.log(b);

// const

const ti=80;
// const ti=60; --error--

{
    const ti=90;
    console.log(ti);
    // ti=70; 
    console.log(ti);

}

console.log(typeof(ti));//typeof


 var g;  //undefined
// null

let n=null;

//typeof = object

// arrays

var arr1=[1,2,3,'heera'];// allows diff datatypes
console.log(arr1);

console.log(arr1[0]);

arr1.push(5);
console.log(arr1);

