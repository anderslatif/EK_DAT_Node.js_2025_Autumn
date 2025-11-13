import { Router } from 'express';

const router = Router();

const realEstateAgents = ["John Doe", "Jane Doe", "Timmy Doe"];

router.get("/realestateagents", (req, res) => {
    res.send({ data: realEstateAgents });
});


export default router;
