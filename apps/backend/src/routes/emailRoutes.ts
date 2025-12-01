import { Router } from "express";
import { sendEmail } from "../handlers/email.ts";

const router = Router()

router.post("/", sendEmail)

export default router