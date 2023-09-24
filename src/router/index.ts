import { Request, Response, Router } from "express";

import db from "../database";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Hello, World!");
});

router.get("/funcionarios", async (req: Request, res: Response) => {
  try {
    const queryResult = await db.getAllFuncionarios();
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
})

export { router };
