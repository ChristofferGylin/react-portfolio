import { Router } from "express";
import { githubFetch } from "../handlers/github.ts";

const router = Router()

router.get("/", githubFetch)

export default router