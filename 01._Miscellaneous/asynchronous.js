// JavaScript is single-threaded, everything runs in a main thread

// example of asynchronous situations
// network, user input, file system handling, databaser


// Solution 1: Callback

// Problem: Callback hell / Pyramid of doom

// Solution 2: Promises (syntactic sugar of callback functions)

// pending => fulfilled
            // resolved | rejected


new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw "Oh no!";
            resolve("Everything went well");
        } catch (error) {
            reject(error);
        }
    }, 2000);
})
.then((message) => console.log(message))
.catch((errorMessage) => console.log(errorMessage));


/* Assignment: Create a promisified function (called myPromise) 
that is a function that returns a promise
Make it resolve as "Something Good" and/or reject as "Something Bad"
create a 3 second delay to simulate asynchronous behavior
*/

