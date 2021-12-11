import '../styles/globals.css'
import type {AppProps} from 'next/app'
import FiltersContext from "@/contexts/FiltersContext";
import AuthContext from "@/contexts/AuthContext";
import CollectionContext from "@/contexts/CollectionContext";
import AlertContext from "@/contexts/AlertContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthContext>
      <CollectionContext>
        <AlertContext>
          <FiltersContext>
            <Component {...pageProps} />
          </FiltersContext>
        </AlertContext>
      </CollectionContext>
    </AuthContext>
  )
}

export default MyApp
