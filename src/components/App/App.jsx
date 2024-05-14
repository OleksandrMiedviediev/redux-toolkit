import { useSelector } from "react-redux"
import Balance from "../Balance/Balance"
import LangSwitcher from "../LangSwitcher/LangSwitcher"

export default function App() {
  const lang = useSelector((state) => state.locale.lang)

  return (
    <>
    <h1>Redux</h1>
    <Balance/>

    <LangSwitcher/>
    <p>Select lang: {lang}</p>
    </>
  )
}

