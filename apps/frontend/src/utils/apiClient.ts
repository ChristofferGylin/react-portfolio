export const resolveApiPrefix = () => {
    if (import.meta.env.PROD) {
        return ''
    } else {
        return 'http://localhost:3000'
    }
}