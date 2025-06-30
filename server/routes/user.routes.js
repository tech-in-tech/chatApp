import express from "express"
import { getMyProfile, getOtherUsers, login, logout, register } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/get-profile",authMiddleware,getMyProfile)
router.post("/logout",authMiddleware,logout)
router.get("/get-other-user",authMiddleware,getOtherUsers)

export default router;