import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import authRequired from "../middlewares/validateToken.js";

const router = Router();

router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
