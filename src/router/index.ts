import { Request, Response, Router } from "express";
import db from "../database";
import Funcionarios from "../models/Funcionarios/Funcionarios";
import Equipes from "../models/Equipes/Equipes";
import Areas from "../models/Areas/Areas";
import Clientes from "../models/Clientes/Clientes";
import Projetos from "../models/Projetos/Projetos";
import Reunioes from "../models/Reunioes/Reunioes";
import Tarefas from "../models/Tarefas/Tarefas";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Hello, World!");
});

// GET ALL FUNCIONARIOS
router.get("/funcionarios", async (req: Request, res: Response) => {
  try {
    const queryResult = await Funcionarios.getAll(db.pool);
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST FUNCIONARIO
router.post("/funcionarios", async (req: Request, res: Response) => {
  try {
    const result = await Funcionarios.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET FUNCIONARIO BY ID
router.get("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const queryResult = await Funcionarios.getById(db.pool, funcionarioId);
    if (queryResult.recordset[0]) res.status(200).json(queryResult.recordset[0]);
    else res.status(404).json({message: 'funcionario not found'})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE FUNCIONARIO BY ID
router.patch("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.update(db.pool, funcionarioId, req.body);
    res.status(200).json({message: "successfully updated user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE FUNCIONARIO BY ID
router.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  try {
    const { id: funcionarioId } = req.params;
    const result = await Funcionarios.delete(db.pool, funcionarioId);
    res.status(200).json({message: "successfully removed user"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL EQUIPES
router.get("/equipes", async (req: Request, res: Response) => {
  try {
    const queryResult = await Equipes.getAll(db.pool);
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST EQUIPE
router.post("/equipes", async (req: Request, res: Response) => {
  try {
    const result = await Equipes.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'equipe'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET EQUIPE BY ID
router.get("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const queryResult = await Equipes.getById(db.pool, equipeId);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE EQUIPE BY ID
router.patch("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const result = await Equipes.update(db.pool, equipeId, req.body);
    res.status(200).json({message: "successfully updated 'equipe'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE EQUIPE BY ID
router.delete("/equipes/:id", async (req: Request, res: Response) => {
  try {
    const { id: equipeId } = req.params;
    const result = await Equipes.delete(db.pool, equipeId);
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
    const result = await Areas.insert(db.pool, req.body);
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

// GET ALL CLIENTES
router.get("/clientes", async (req: Request, res: Response) => {
  try {
    const queryResult = await Clientes.getAll(db.pool);
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST CLIENTE
router.post("/clientes", async (req: Request, res: Response) => {
  try {
    const result = await Clientes.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'cliente'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET CLIENTE BY ID
router.get("/clientes/:id", async (req: Request, res: Response) => {
  try {
    const { id: clienteId } = req.params;
    const queryResult = await Clientes.getById(db.pool, clienteId);
    if (queryResult.recordset[0]) res.status(200).json(queryResult.recordset[0]);
    else res.status(404).json({message: 'cliente not found'})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE CLIENTE BY ID
router.patch("/clientes/:id", async (req: Request, res: Response) => {
  try {
    const { id: clienteId } = req.params;
    const result = await Clientes.update(db.pool, clienteId, req.body);
    res.status(200).json({message: "successfully updated 'cliente'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE CLIENTE BY ID
router.delete("/clientes/:id", async (req: Request, res: Response) => {
  try {
    const { id: clienteId } = req.params;
    const result = await Clientes.delete(db.pool, clienteId);
    res.status(200).json({message: "successfully removed 'cliente'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL PROJETOS
router.get("/projetos", async (req: Request, res: Response) => {
  try {
    const queryResult = await Projetos.getAll(db.pool);
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST PROJETO
router.post("/projetos", async (req: Request, res: Response) => {
  try {
    const result = await Projetos.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'projeto'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET PROJETO BY ID
router.get("/projetos/:id", async (req: Request, res: Response) => {
  try {
    const { id: projetoId } = req.params;
    const queryResult = await Projetos.getById(db.pool, projetoId);
    if (queryResult.recordset[0]) res.status(200).json(queryResult.recordset[0]);
    else res.status(404).json({message: 'projeto not found'})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE PROJETO BY ID
router.patch("/projetos/:id", async (req: Request, res: Response) => {
  try {
    const { id: projetoId } = req.params;
    const result = await Projetos.update(db.pool, projetoId, req.body);
    res.status(200).json({message: "successfully updated 'projeto'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE PROJETO BY ID
router.delete("/projetos/:id", async (req: Request, res: Response) => {
  try {
    const { id: projetoId } = req.params;
    const result = await Projetos.delete(db.pool, projetoId);
    res.status(200).json({message: "successfully removed 'projeto'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL REUNIOES
router.get("/reunioes", async (req: Request, res: Response) => {
  try {
    const queryResult = await Reunioes.getAll(db.pool);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST REUNIAO
router.post("/reunioes", async (req: Request, res: Response) => {
  try {
    const result = await Reunioes.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'reuniao'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET REUNIAO BY ID
router.get("/reunioes/:id", async (req: Request, res: Response) => {
  try {
    const { id: reuniaoId } = req.params;
    const queryResult = await Reunioes.getById(db.pool, reuniaoId);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE REUNIAO BY ID
router.patch("/reunioes/:id", async (req: Request, res: Response) => {
  try {
    const { id: reuniaoId } = req.params;
    const result = await Reunioes.update(db.pool, reuniaoId, req.body);
    res.status(200).json({message: "successfully updated 'reuniao'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE REUNIAO BY ID
router.delete("/reunioes/:id", async (req: Request, res: Response) => {
  try {
    const { id: reuniaoId } = req.params;
    const result = await Reunioes.delete(db.pool, reuniaoId);
    res.status(200).json({message: "successfully removed 'reuniao'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET ALL TAREFAS
router.get("/tarefas", async (req: Request, res: Response) => {
  try {
    const queryResult = await Tarefas.getAll(db.pool);
    res.status(200).json(queryResult.recordset);
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// POST TAREFAS
router.post("/tarefas", async (req: Request, res: Response) => {
  try {
    const result = await Tarefas.insert(db.pool, req.body);
    res.status(200).json({message: "successfully inserted new 'tarefa'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// GET TAREFA BY ID
router.get("/tarefas/:id", async (req: Request, res: Response) => {
  try {
    const { id: tarefaId } = req.params;
    const queryResult = await Tarefas.getById(db.pool, tarefaId);
    if (queryResult.recordset[0]) res.status(200).json(queryResult.recordset[0]);
    else res.status(404).json({message: 'tarefa not found'})
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// UPDATE TAREFA BY ID
router.patch("/tarefas/:id", async (req: Request, res: Response) => {
  try {
    const { id: tarefaId } = req.params;
    const result = await Tarefas.update(db.pool, tarefaId, req.body);
    res.status(200).json({message: "successfully updated 'tarefa'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

// DELETE TAREFA BY ID
router.delete("/tarefas/:id", async (req: Request, res: Response) => {
  try {
    const { id: tarefaId } = req.params;
    const result = await Tarefas.delete(db.pool, tarefaId);
    res.status(200).json({message: "successfully removed 'tarefa'"});
  } catch (error) {
    res.status(500).send("SERVER ERROR");
  }
});

export { router };
