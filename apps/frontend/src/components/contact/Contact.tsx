import { useTranslation } from "react-i18next"

const Contact = () => {
    
    const { t } = useTranslation("contact")
    
    return (
        <div>
            <p>{t("tagline", { ns: "contact" })}</p>
            <h1>{t("heading", { ns: "contact" })}</h1>
        </div>
    )
}

export default Contact