import Head from 'next/head'
import Image from 'next/image'
import About from '../componants/About/About'
import Avis from '../componants/Avis/Avis'
import Banner from '../componants/Banner/Banner'
import Slideshow from '../componants/Products/SlideShow/Slideshow'
import house from '../Json/House.json'
import avis from '../Json/Avis.json'
import team from '../Json/Team.json'
import Team from '../componants/Team/Home/Team'
import WhyUs from '../componants/WhyUS/WhyUs'
import Fonctionnement from '../componants/Fonctionnement/Fonctionnement'
export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Slideshow houses={house}/>
      <WhyUs/>
      <Avis avis={avis}/>
      <Fonctionnement/>
      <Team limit={3} team={team}/>
    </div>
  )
}
