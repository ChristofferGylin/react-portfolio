import { type EmailParams } from "../types/api"

export const resolveApiPrefix = () => {
    if (import.meta.env.PROD) {
        return ''
    } else {
        return 'http://localhost:3000'
    }
}

export const sendMessage = async (params: EmailParams) => {
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

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
    
}