import '../styles/globals.css'
import type {AppProps} from 'next/app'
import FiltersContext from "@/contexts/FiltersContext";
import AuthContext from "@/contexts/AuthContext";
import CollectionContext from "@/contexts/CollectionContext";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AuthContext>
      <CollectionContext>
        <FiltersContext>
          <Component {...pageProps} />
        </FiltersContext>
      </CollectionContext>
    </AuthContext>
  )
}

export default MyApp
