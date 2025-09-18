const express = require("express");
const app = express();

// console.log(Date.now()); // Unix Epoch Time Seconds since Jan. 1st 1970
// console.log(new Date()); // UTC 

// task create a route called /month that responds with the current month (i.e. September)
// hint: use new Date()

const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December" 
];

app.get("/month/v1", (req, res) => {
    
    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });
});

app.get("/month/v2", (req, res) => {
    const currentMonth = new Date().toLocaleDateString("en-uk", { month: "long"})

    res.send({ data: currentMonth });
});

// task write /day and respond with the weekday (i.e. Thursday)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

app.get("/day/v1", (req, res) => {
    const currentDay = days[new Date().getDay()]

    res.send({ data: currentDay });
});

app.get("/day/v2", (req, res) => {
    const currentDay = new Date().toLocaleDateString("en-uk", { weekday: "long"})

    res.send({ data: currentDay });
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});