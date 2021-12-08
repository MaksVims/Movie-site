import '../styles/globals.css'
import type {AppProps} from 'next/app'
import FiltersContext from "@/contexts/FiltersContext";
import AuthContext from "@/contexts/AuthContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthContext>
      <FiltersContext>
        <Component {...pageProps} />
      </FiltersContext>
    </AuthContext>
  )
}

export default MyApp
