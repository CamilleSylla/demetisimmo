import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PageHeader () {

  const router = useRouter()
  const [title, setTitle] = useState()

  useEffect(() => {
    if (router.pathname === "/") {
      setTitle('')
    } else if (router.pathname === '/bien/[ref]') {
      setTitle(` - Bien ${router.query.ref}`)   
    } else {
      const removeSlash = router.route.replace('/', '')
      const finalTitle = removeSlash.charAt(0).toUpperCase() + removeSlash.slice(1)
      setTitle(` - ${finalTitle}`)   
    }

  },[router])
    return (
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <title>Demetis {title}</title>
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

        </Head>
    )
}