export type EmailParams = {
    name: string;
    email: string;
    message: string;
}

export type EmailResponse = {
    ok: boolean;
    error?: Error;
}