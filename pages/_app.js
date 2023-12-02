
import { ApplictaionContextProvider } from '@/Context/ApplicationContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ApplictaionContextProvider>
  <Component {...pageProps} />
  </ApplictaionContextProvider>
  )
}
