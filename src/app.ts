import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "The server is running",
  });
});

export default app;
