import express from "express";

import { submitUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/submit", submitUser);

export default router;
