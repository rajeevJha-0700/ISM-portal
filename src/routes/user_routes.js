import express from "express";
const router = express.Router();
import {signup} from "../controller/userController.js";
router.post("/signup",signup);

export default router;