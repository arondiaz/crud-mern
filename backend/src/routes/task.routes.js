import { Router } from "express";
import authRequired from "../middlewares/validateToken.js";
import {
  getTasks,
  getOneTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/api/task", authRequired, getTasks);
router.get("/api/task/:id", authRequired, getOneTask);
router.post("/api/task", authRequired, createTask);
router.delete("/api/task/:id", authRequired, deleteTask);
router.put("/api/task", authRequired, updateTask);

export default router;
