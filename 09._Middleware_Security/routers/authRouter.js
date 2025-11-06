import { Router } from 'express';

const router = Router();

function isAdmin() {
    
}

router.get("/secretroute", (req, res) => {
    res.send({ data: "Some secret data" });
});


export default router;