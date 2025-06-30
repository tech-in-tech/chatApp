import express from "express"

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();


router.post("/send/:receiverId", authMiddleware, sendMessage)
router.get("/get-messages/:otherParticipantId", authMiddleware, getMessages)
 
export default router;