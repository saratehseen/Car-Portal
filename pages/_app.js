import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

// config.autoAddCss = false 
library.add(faBars)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
