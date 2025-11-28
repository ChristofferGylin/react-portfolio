import { configDotenv } from "dotenv";

configDotenv()

type Config = {
    port: number;
    nodeEnv: string;
    githubToken: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    githubToken: process.env.GITHUB_TOKEN || ''
}

export default config