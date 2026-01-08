import { useTranslation } from "react-i18next"
import PageContainer from "../common/PageContainer"

const About = () => {

    const { t } = useTranslation("about")

    const paragraphs = t("paragraphs", { ns: "about", returnObjects: true}) as string[]
    return (
        <PageContainer>
            <h1>{t("heading1", { ns: "about" })}</h1>
            <div>
                {paragraphs.map((para, index) => (
                    <p key={`aboutParagraph${index}`}>{para}</p>
                ))}
            </div>
        </PageContainer>
    )
}

export default About