import { useTranslation } from "react-i18next"
import PageContainer from "../common/PageContainer"

const About = () => {

    const { t } = useTranslation("about")

    const paragraphs = t("paragraphs", { ns: "about", returnObjects: true}) as string[]
    return (
        <PageContainer>
            <h1 className="text-5xl mb-8">{t("heading1", { ns: "about" })}</h1>
            <div className="flex flex-col gap-6 text-2xl">
                {paragraphs.map((para, index) => (
                    <p key={`aboutParagraph${index}`}>{para}</p>
                ))}
            </div>
        </PageContainer>
    )
}

export default About