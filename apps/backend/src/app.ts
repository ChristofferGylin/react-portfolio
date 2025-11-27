import express from "express"
import helloRoutes from "./routes/helloRoutes.js"
import { errorHandler } from "./middleware/errorHandler.js"

const app = express()

app.use(express.json())

app.use("/hello", helloRoutes)

app.use(errorHandler)

export default app