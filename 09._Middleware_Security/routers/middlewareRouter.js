import { Router } from 'express';

const router = Router();

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

router.use("/room", ipLogger);


router.get("/room/:furniture", (req, res) => {
    res.send({ data: "You are in room 1" });
});

router.get("/room/sofa", (req, res) => {
    res.send({ data: "You are in room 2" });
});


function greeter(req, res, next) {
    // res.send("<h1>Unauthorized</h1>");
    next();
}


router.get("/room", greeter, (req, res, next) => {
    // res.send({ data: "You are in room 1" });
    console.log("You are in room 1, Mette!");
    next();
});
                // inline middleware
router.get("/room", (req, res, next) => {
    console.log("Checking your papers... Go on in.");
    next();
}, (req, res) => {
    res.send({ data: "You are in room 2" });
});

export default router; 