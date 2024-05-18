import express from 'express';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.render('error', { error: err });
}


export { errorHandler };