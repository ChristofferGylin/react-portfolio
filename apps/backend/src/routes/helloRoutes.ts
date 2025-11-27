import { Router } from "express";
import { hello } from "../handlers/hello.ts";


const router = Router()

router.post("/", hello)

export default router