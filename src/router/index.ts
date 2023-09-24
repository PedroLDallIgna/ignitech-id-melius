import { Request, Response, Router } from "express";
import db from "../database";
import Funcionarios from "../models/Funcionarios/Funcionarios";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Hello, World!");
});

// GET ALL FUNCIONARIOS
router.get("/funcionarios", async (req: Request, res: Response) => {
  try {
    const queryResult = await Funcionarios.getAllFuncionarios(db.pool);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST FUNCIONARIO
router.post("/funcionarios", async (req: Request, res: Response) => {
  try {
    const result = await Funcionarios.insertFuncionario(db.pool, req.body);
    res.status(200).json({message: "successfully inserted user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET FUNCIONARIO BY ID
router.get("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.getFuncionarioById(db.pool, funcionarioId);
    res.status(200).json({message: "successfully removed user"})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE FUNCIONARIO BY ID
router.patch("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.updateFuncionario(db.pool, funcionarioId, req.body);
    res.status(200).json({message: "successfully updated user"})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE FUNCIONARIO BY ID
router.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.deleteFuncionario(db.pool, funcionarioId);
    res.status(200).json({message: "successfully removed user"})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

export { router };
