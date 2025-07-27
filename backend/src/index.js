import "dotenv/config";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/user", userRoutes);

app.listen(PORT);
