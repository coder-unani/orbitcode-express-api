import express from 'express';
import { Router, Request, Response, NextFunction } from 'express';

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("I am a middleware Logging");
    next();
}

export { loggingMiddleware };