import { Router } from "express";
import authRequired from "../middlewares/validateToken.js";

const router = Router();

router.get("/task", authRequired, (req, res) => res.send("OK task"));

export default router;
