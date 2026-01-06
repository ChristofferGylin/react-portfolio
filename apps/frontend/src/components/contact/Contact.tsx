import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import { sendMessage } from "../../utils/apiClient"
import type { EmailParams } from "../../types/api"

const Contact = () => {
    
    const { 
        reset,
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

    const onSubmit = async (data: EmailParams) => {
        const response = await sendMessage(data)
        if (!response.ok) {
            console.error(response.error)
        } else {
            reset()
        }
        
    }
    
return (
    <div className="w-full flex justify-center min-h-[calc(100vh-8rem)]">
        <div className="flex flex-col w-full lg:w-3/4 min-h-0 p-10 lg:px-0">
            <div className="flex flex-col gap-2 mb-8">
                <p className="text-2xl">{t("tagline", { ns: "contact" })}</p>
                <h1 className="text-5xl">{t("heading", { ns: "contact" })}</h1>
            </div>
            <form
                className="flex flex-col flex-1 min-h-0 w-full"
                onSubmit={handleSubmit((data) => onSubmit(data))}
            >
                <div className="flex flex-col flex-1 min-h-0">
                    <textarea
                        className={`text-input flex-1 min-h-0 ${errors.message ? "border-red-500" : "border-transparent"}`}
                        {...register("message", { required: t("text_error_msg", { ns: "contact" }) })}
                        placeholder={t("text_placeholder", { ns: "contact" })}
                    />
                    <p className="input-warning">{errors.message?.message}</p>
                </div>
                <div className="grid grid-rows-[3rem_2.2rem_3rem_2.2rem]">
                    <input
                        className={`text-input ${errors.name ? "border-red-500" : "border-transparent"}`}
                        {...register("name", { required: t("name_error_msg", { ns: "contact" }) })}
                        placeholder={t("name_placeholder", { ns: "contact" })}
                    />
                    <p className="input-warning">{errors.name?.message}</p>

                    <input
                        className={`text-input ${errors.email ? "border-red-500" : "border-transparent"}`}
                        {...register("email", { required: t("email_error_msg", { ns: "contact" }) })}
                        placeholder={t("email_placeholder", { ns: "contact" })}
                    />
                    <p className="input-warning">{errors.email?.message}</p>
                </div>
                <input
                    disabled={Object.keys(errors).length > 0}
                    className="enabled:cursor-pointer w-fit p-4 text-xl rounded-lg border border-cyan-500/50 bg-slate-800 text-cyan-300 enabled:hover:border-cyan-500 enabled:hover:bg-slate-700"
                    type="submit"
                    value={t("button", { ns: "contact" })}
                />
            </form>
        </div>
  </div>
);

}

export default Contact