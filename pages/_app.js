import Footer from '../componants/Footer/Footer'
import ModuleVendre from '../componants/ModuleVendre/Vendre/ModuleVendre'
import Nav from '../componants/Nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <ModuleVendre/> */}
    <Nav/>
    <Component {...pageProps} />

    </>
  )
}

export default MyApp
