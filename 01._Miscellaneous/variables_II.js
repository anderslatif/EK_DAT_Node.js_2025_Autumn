"use strict";

// missing declaration
// totalGlobalVariable = "Never EVER!!! do this";

// var globalScope = "never do this!"

// use const whenever possible, otherwise use let if we ever intend to reassign
// const public = "variable";

// const is constant in the assignment
// we can change values of constant but we cannot reassign it
const someType = 123;
// someType = 456;

const notConstantObject = {};
notConstantObject.name = "Rune";

const notConstantArray = [1];
notConstantArray.push(2);
// console.log(notConstantArray);


function someFunction() {
   // function scope 
}

{ // block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
    // console.log(someVariable);
}

{ 
    let someVariable = true;
    {
        let someVariable = false;
    }
    // console.log(someVariable);
}

// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
