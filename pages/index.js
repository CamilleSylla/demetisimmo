import Head from 'next/head'
import Image from 'next/image'
import About from '../componants/About/About'
import Banner from '../componants/Banner/Banner'
import Slideshow from '../componants/Products/SlideShow/Slideshow'
import house from '../Json/House.json'
export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Slideshow houses={house}/>
    </div>
  )
}
