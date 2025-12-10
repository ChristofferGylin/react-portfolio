import express from "express"
import githubRoutes from "./routes/githubRoutes.ts"
import emailRoutes from "./routes/emailRoutes.ts"
import { errorHandler } from "./middleware/errorHandler.ts"
import cors from "cors"
import config from "./config/config.ts"

const app = express()

app.use(express.json())

if (config.nodeEnv === "development")  {
    app.use(cors({
        origin: "http://localhost:5173"
    }))
}

app.use("/api/github", githubRoutes)
app.use("/api/email", emailRoutes)

app.use(errorHandler)

export default app