import { Trans, useTranslation } from "react-i18next"

function App() {

  const { t } = useTranslation()

  return (
    <>
      <h1 className="text-3xl text-purple-500">Vite + React = Portfolio</h1>
      <Trans i18nKey={'welcome.part1'}>
        Welcome <span className="text-pink-600 text-xl animate-bounce">beautiful</span> people
      </Trans>
      <p>
        {t('welcome.part2')}
      </p>
    </>
  )
}

export default App
