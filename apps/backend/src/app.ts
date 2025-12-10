import express from "express"
import githubRoutes from "./routes/githubRoutes.ts"
import emailRoutes from "./routes/emailRoutes.ts"
import { errorHandler } from "./middleware/errorHandler.ts"

const app = express()

app.use(express.json())

app.use("/api/github", githubRoutes)
app.use("/api/email", emailRoutes)

app.use(errorHandler)

export default app