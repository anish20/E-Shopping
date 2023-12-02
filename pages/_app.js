import { NavbarContextProvider } from '@/Context/NavbarContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <NavbarContextProvider>
  <Component {...pageProps} />
  </NavbarContextProvider>
  )
}
