import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json()); //So that express can read the request.body

app.use(authRoutes);

export default app;
