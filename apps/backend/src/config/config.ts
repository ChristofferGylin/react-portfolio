import { configDotenv } from "dotenv";

configDotenv()

type Config = {
    port: number;
    nodeEnv: string;
    githubToken: string;
    smtpUrl: string;
    emailUser: string;
    emailPassword: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
    githubToken: process.env.GITHUB_TOKEN || '',
    smtpUrl: process.env.SMTP_URL || '',
    emailUser: process.env.EMAIL_USER || '',
    emailPassword: process.env.EMAIL_PASSWORD || '',
}

export default config