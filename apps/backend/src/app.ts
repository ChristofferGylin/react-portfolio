import express from "express"
import helloRoutes from "./routes/helloRoutes.ts"
import { errorHandler } from "./middleware/errorHandler.ts"

const app = express()

app.use(express.json())

app.use("/hello", helloRoutes)

app.use(errorHandler)

export default app