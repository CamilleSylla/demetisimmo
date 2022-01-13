import Footer from '../componants/Footer/Footer'
import NavBar from '../componants/Nav/NavBar/NavBar'
import { TeamProvider } from '../context/TeamContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TeamProvider>
      <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </TeamProvider>
  )
}

export default MyApp
