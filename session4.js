//ternery operator

let x=10;

//if x<20 failes otherwise pass

result=(x<20?"failed":"passed")
console.log(result);

//console.log(x<20?"failed":"passed")

//loops

//for

for (let index = 1; index < 6; index++) {
    console.log(index)
}

let fruits=['apple','mango','grapes','orange','banana'];
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
    
}

//for of

for( x of fruits){
    console.log(x)
}

//foreach

fruits.forEach(element=>{
    console.log(element)
})

let person={
    name:'anjali', age:20, plkace:'dubai'
}

for (x in person) {
    console.log(person[x])
}

//while loop

let j=0;
while(j<5){
    console.log(j+1)
    j++
}
let i=0;
while(i<fruits.length)
{
    console.log(fruits[i]);
    i++
}

// do-while (exit control)

let p=0;
do{
    console.log(p)
    p++;
}while(p<=5);