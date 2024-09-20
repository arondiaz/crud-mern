import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors"

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(morgan("dev"));
app.use(express.json()); //So that express can read the request.body
app.use(cookieParser());

app.use(authRoutes);
app.use(taskRoutes);

export default app;
