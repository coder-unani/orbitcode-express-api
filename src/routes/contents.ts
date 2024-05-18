import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get("/videos", (req: Request, res: Response) => {
    res.send('contents videos api');
});

export default router;