import { Router } from 'express';

const router = Router();

/* 
    Authentication: Trying to establish identity. 
        E.g. A login where a user uses a username and password to authenticate themselves

    Ahtorhizataion: Trying to establish if the user is allowed to access the resources.
        E.g. Only an admin user is allowed to access the route. We need to check if they are admin or not.
*/

function isAdmin(req, res, next) {
    // this simulates checking in the database
    // and assumes that the user is admin
    const isAdmin = true;
    if (isAdmin) {
        req.isAdmin = isAdmin;
        // again, simulates username from the database
        req.username = "Johnnie";
        return next();
    }
    res.status(403).send({ data: "You need to be an admin to access this route" });
}

router.get("/auth/secretroute", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    res.send({ data: "Some secret data" });
});


export default router;