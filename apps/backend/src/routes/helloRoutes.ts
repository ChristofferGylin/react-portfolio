import { Router } from "express";
import { hello } from "../handlers/hello.js";


const router = Router()

router.post("/hello", hello)

export default router