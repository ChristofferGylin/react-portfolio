import { Suspense } from "react"
// import { useTranslation } from "react-i18next"
import Menu from "./components/menu/Menu"
import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import CV from "./components/cv/CV"
import Portfolio from "./components/portfolio/Portfolio"
import NotFound from "./components/notFound/Not Found"

function App() {

  // const { t, i18n } = useTranslation(['home'])

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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
