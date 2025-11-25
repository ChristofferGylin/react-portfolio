import { Suspense } from "react"
// import { useTranslation } from "react-i18next"
import Menu from "./components/menu/Menu"

function App() {

  // const { t, i18n } = useTranslation(['home'])

  return (
    <>
      <Menu />
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
