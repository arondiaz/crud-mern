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

router.get("/task", authRequired, getTasks);
router.get("/task/:id", authRequired, getOneTask);
router.post("/task", authRequired, createTask);
router.delete("/task/:id", authRequired, deleteTask);
router.put("/task", authRequired, updateTask);

export default router;
