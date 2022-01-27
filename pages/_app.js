import { useEffect } from 'react/cjs/react.development'
import Footer from '../componants/Footer/Footer'
import NavBar from '../componants/Nav/NavBar/NavBar'
import { TeamProvider } from '../context/TeamContext'
import '../styles/globals.css'
import { useRouter } from 'next/router'

import * as ga from '../helper/ga'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <TeamProvider>
      <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </TeamProvider>
  )
}

export default MyApp
