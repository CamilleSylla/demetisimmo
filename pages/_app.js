import Footer from '../componants/Footer/Footer'
import Nav from '../componants/Nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    
    
    </>
  )
}

export default MyApp
