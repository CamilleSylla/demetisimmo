import Footer from '../componants/Footer/Footer'
import Nav from '../componants/Nav/Nav'
import { TeamProvider } from '../context/TeamContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <TeamProvider>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </TeamProvider>
    </>
  )
}

export default MyApp
