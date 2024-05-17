import express, { Request, Response, NextFunction } from "express";

import { loggingMiddleware } from "./middleware/logging";
import router from "./routes/contents";


const app = express();
const port = 3000;

app.use(loggingMiddleware);
app.use(router);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!@!');
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})