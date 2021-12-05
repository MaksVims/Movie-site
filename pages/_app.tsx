import '../styles/globals.css'
import type {AppProps} from 'next/app'
import FiltersContext from "@/contexts/FiltersContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <FiltersContext>
      <Component {...pageProps} />
    </FiltersContext>
  )
}

export default MyApp
