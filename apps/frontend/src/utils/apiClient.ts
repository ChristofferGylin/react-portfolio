import { type EmailParams, type EmailResponse } from "../types/api"

export const resolveApiPrefix = () => {
    if (import.meta.env.PROD) {
        return ''
    } else {
        return 'http://localhost:3000'
    }
}

export const sendMessage = async (params: EmailParams): Promise<EmailResponse> => {
    try {
        const response = await fetch(`${resolveApiPrefix()}/api/email`, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
        }

        return response
    } catch (err) {

        const error = err instanceof Error ? err : new Error(String(err))
        console.error(error)
        
        return { ok: false, error }
    }
    
}