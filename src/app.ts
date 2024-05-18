import express, { Request, Response, NextFunction } from "express";

import { loggingMiddleware } from "./middleware/logging";
import { errorHandler } from "./middleware/errorHandler";

import router from "./routes/contents";


const app = express();
const port = 3000;

app.use("/contents", router);

app.use(loggingMiddleware);
app.use(errorHandler);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!@!');
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})