import app from "./src/app.ts"
import config from "./src/config/config.ts"


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`)
})