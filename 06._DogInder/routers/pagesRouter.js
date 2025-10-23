import { Router } from 'express';
import { frontpagePage, matchesPage, contactPage } from '../util/pagesUtil.js';

const router = Router();

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

router.get('/contact', (req, res) => {
    res.send(contactPage);
});

export default router;

