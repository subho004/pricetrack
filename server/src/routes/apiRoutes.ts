// apiRoutes.ts

import express from "express";

const router = express.Router();

import { getBinancePrices } from "../controllers/binanceController";

router.get("/prices", getBinancePrices);

export default router;
