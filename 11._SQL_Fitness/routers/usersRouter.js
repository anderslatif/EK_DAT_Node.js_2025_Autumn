import { Router } from 'express';
import db from '../database/connection.js';

const router = Router();


router.post('/api/users', async (req, res) => {
    const { username, role } = req.body;
    const { lastID } = await db.run('INSERT INTO users (username, role) VALUES (?, ?);', [username, role]);
    res.send({ data: { createdId: lastID } });
});


export default router;
