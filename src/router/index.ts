import { Request, Response, Router } from "express";
import db from "../database";
import Funcionarios from "../models/Funcionarios/Funcionarios";
import Equipes from "../models/Equipes/Equipes";
import Areas from "../models/Areas/Areas";

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
    const queryResult = await Funcionarios.getFuncionarioById(db.pool, funcionarioId);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE FUNCIONARIO BY ID
router.patch("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.updateFuncionario(db.pool, funcionarioId, req.body);
    res.status(200).json({message: "successfully updated user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE FUNCIONARIO BY ID
router.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.deleteFuncionario(db.pool, funcionarioId);
    res.status(200).json({message: "successfully removed user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL EQUIPES
router.get("/equipes", async (req: Request, res: Response) => {
  try {
    const queryResult = await Equipes.getAllEquipes(db.pool);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST EQUIPE
router.post("/equipes", async (req: Request, res: Response) => {
  try {
    const queryResult = await Equipes.insertEquipe(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'equipe'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET EQUIPE BY ID
router.get("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const queryResult = await Equipes.getEquipeById(db.pool, equipeId);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE EQUIPE BY ID
router.patch("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const result = await Equipes.updateEquipe(db.pool, equipeId, req.body);
    res.status(200).json({message: "successfully updated 'equipe'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE EQUIPE BY ID
router.delete("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const result = await Equipes.deleteEquipe(db.pool, equipeId);
    res.status(200).json({message: "successfully removed 'equipe'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL AREAS
router.get("/areas", async (req: Request, res: Response) => {
  try {
    const queryResult = await Areas.getAll(db.pool);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST AREA
router.post("/areas", async (req: Request, res: Response) => {
  try {
    const queryResult = await Areas.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'area'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET AREA BY ID
router.get("/areas/:id", async (req: Request, res: Response) => {
  try {
    const { id: areaId } = req.params;
    const queryResult = await Areas.getById(db.pool, areaId);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE AREA BY ID
router.patch("/areas/:id", async (req: Request, res: Response) => {
  try {
    const { id: areaId } = req.params;
    const result = await Areas.update(db.pool, areaId, req.body);
    res.status(200).json({message: "successfully updated 'area'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE AREA BY ID
router.delete("/areas/:id", async (req: Request, res: Response) => {
  try {
    const { id: areaId } = req.params;
    const result = await Areas.delete(db.pool, areaId);
    res.status(200).json({message: "successfully removed 'area'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

export { router };
