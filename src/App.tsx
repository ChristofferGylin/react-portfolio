import { Suspense } from "react"
import { Trans, useTranslation } from "react-i18next"

const lngs = {
  en: { nativeName: 'English'},
  sv: { nativeName: 'Svenska'},
}

function App() {

  const { t, i18n } = useTranslation(['home'])

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
      <p>{t('intro.hi', { ns: 'home'})}</p>
      <h1 className="text-3xl text-purple-500">Christoffer Gylin</h1>
      <p>
        {t('intro.tagline', {ns: 'home'})}
      </p>
      <p>
        {t('intro.text', {ns: 'home'})}
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
