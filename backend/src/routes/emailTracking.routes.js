import express from "express";

import {
  trackEmailOpen,
  trackPaymentClick,
} from "../controllers/emailTracking.controller.js";

const router = express.Router();

router.get("/open/:id", trackEmailOpen);
router.get("/click/:id", trackPaymentClick);

export default router;
