// .forEach   .filter  .map  .reduce  .find  .indexOf 

// use loop methods unless you finger count

// .forEach loops through the entire array but does not return a new array, 
// use it when you don't care about the values afterwards

// .filter creates a new array either 1:1 or less than the amount of element

// map returns a new list 1:1





const numbers = [1, 2, 3, 4, 5];


// assignment: double the numbers above

const doubledNumbers = numbers.map((number) => number * 2);

const desserts = [
    {
        name: "flan",
        weightGram: 200,
        calories: 233
    },
    {
        name: "banana split",
        weightGram: 700,
        calories: 832
    },
    {
        name: "brownie",
        weightGram: 600
    }
];

// assignment make all desserts weight 400 gram extra except for "brownie"

// const biggerPortionedDesserts = desserts.map((dessert) => {
//     if (dessert.name !== "brownie") {
//         dessert.weightGram += 400;
//     }
//     return dessert;
// });
const biggerPortionedDesserts = desserts.map((dessert) => ({
    weightGram: dessert.name === "brownie" ? dessert.weightGram : dessert.weightGram + 400,
    ...dessert
}));
// ternary statement
console.log(biggerPortionedDesserts);


numbers.map((element, index, array) => console.log(element, index, array));

