/* export  */function candyFactory() {
    return ["🍬", "🍫", "🍭", "🪅"];
}

/* export  */const owner = "Willy Wonka";

function internalFunction() {
    console.log("oompa loompa");
}


export default { 
    candyFactory: candyFactory,
    owner: owner
};