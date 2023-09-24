import express, { Application, Request, Response } from "express";

const app = express();
import * as db from "../database";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.send("Hello World");
})

router.get("/funcionarios", async (req: Request, res: Response) => {
    try {
        const queryResult = await db.getAllFuncionarios();
        res.status(200).json(queryResult);
    } catch (err) {
        res.status(500).send("SERVER ERROR");
    }
})

app.use("/api", router);

export default app;