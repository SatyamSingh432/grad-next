import "dotenv/config";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import emailTracking from "./routes/emailTracking.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/user", userRoutes);
app.use("/api/log", emailTracking);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
