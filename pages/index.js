import Head from 'next/head'
import Image from 'next/image'
import About from '../componants/About/About'
import Banner from '../componants/Banner/Banner'

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
    </div>
  )
}
