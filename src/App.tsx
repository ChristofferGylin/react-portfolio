import { Suspense } from "react"
import { Trans, useTranslation } from "react-i18next"

const lngs = {
  en: { nativeName: 'English'},
  sv: { nativeName: 'Svenska'},
}

function App() {

  const { t, i18n } = useTranslation()

  return (
    <>
    <div className="flex gap-2">
      {(Object.keys(lngs) as Array<keyof typeof lngs>).map((lng) => {
        return (
          <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)} className="border rounded bg-blue-200 p-1">
            {lngs[lng].nativeName}
          </button>
        )
      })}
    </div>
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

export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  )
}
