import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({});
});

app.listen(PORT);
