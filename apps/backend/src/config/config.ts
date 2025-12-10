import { configDotenv } from "dotenv";

configDotenv()

type Config = {
    port: number;
    nodeEnv: string;
    githubToken: string;
    emailHost: string;
    emailPort: number;
    emailUser: string;
    emailPassword: string;
    emailRecipient: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    githubToken: process.env.GITHUB_TOKEN || '',
    emailHost: process.env.EMAIL_HOST || '',
    emailPort: Number(process.env.EMAIL_PORT) || 465,
    emailUser: process.env.EMAIL_USER || '',
    emailPassword: process.env.EMAIL_PASSWORD || '',
    emailRecipient: process.env.EMAIL_RECIPIENT || '',
}

export default config