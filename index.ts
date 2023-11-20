import express, { Application } from "express";
import cors from "cors";
const port = 1414;

const app: Application = express();

app.use(cors());
app.use(express.json());
const server = app.listen(port, () => {
  console.log("server is up and running");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  process.exit(1);
});
