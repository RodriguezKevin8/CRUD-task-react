import express from "express";
import task from "./Route/Task.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", task);

app.listen(3000);
console.log(`Server on port ${3000}`);
