// hoisting
// console.log(getRandomInt(5, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

console.log(getRandomIntArrowFunction);

                                    // action = callback function
                                    // a function that is passed as an argument to another function
                                    // and only potentially invoked laterx
function genericActionPerformer(name, action) {
    return action(name);
}

function cookingAction(name) {
    return `${name} enjoys cooking.`;
}

// task using the genericActionPerformer, console.log "Jens enjoys cooking."
// task do it in one line below, don't change anything above

console.log(genericActionPerformer("Jens", cookingAction));


// task using an arrow function below, console.log Marco loves to run!

const runningAction = (name) => {
    return `${name} loves running!`
};

console.log(genericActionPerformer("Marco", runningAction));

// task in a single line below write "Lucas likes asking questions"
console.log(genericActionPerformer("Lucas", (name) => `${name} likes asking questions`));