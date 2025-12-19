import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"

const Contact = () => {
    
    const { register, handleSubmit } = useForm() 

    const { t } = useTranslation("contact")
    
    return (
        <div>
            <p>{t("tagline", { ns: "contact" })}</p>
            <h1>{t("heading", { ns: "contact" })}</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <input {...register("message")} placeholder={t("text_placeholder", { ns: "contact"})} />
                <input {...register("name")} placeholder={t("name_placeholder", { ns: "contact"})} />
                <input {...register("email")} placeholder={t("email_placeholder", { ns: "contact"})} />
                <input className="cursor-pointer" type="submit" value={t("button", { ns: "contact"})} />
            </form>
        </div>
    )
}

export default Contact