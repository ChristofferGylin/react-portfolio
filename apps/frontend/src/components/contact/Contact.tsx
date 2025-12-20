import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"

const Contact = () => {
    
    const { 
        register,
        handleSubmit,
        formState: { errors }
     } = useForm({
        defaultValues: {
            message: "",
            name: "",
            email: "",
        }
     }) 

    const { t } = useTranslation("contact")
    
    return (
        <div>
            <p>{t("tagline", { ns: "contact" })}</p>
            <h1>{t("heading", { ns: "contact" })}</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <input {...register("message", { required: t("text_error_msg", { ns: "contact" })})} placeholder={t("text_placeholder", { ns: "contact"})} />
                <p>{errors.message?.message}</p>
                <input {...register("name", { required: t("name_error_msg", { ns: "contact" })})} placeholder={t("name_placeholder", { ns: "contact"})} />
                <p>{errors.name?.message}</p>
                <input {...register("email", { required: t("email_error_msg", { ns: "contact" })})} placeholder={t("email_placeholder", { ns: "contact"})} />
                <p>{errors.email?.message}</p>
                <input className="cursor-pointer" type="submit" value={t("button", { ns: "contact"})} />
            </form>
        </div>
    )
}

export default Contact