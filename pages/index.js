import About from '../componants/About/About'
import Avis from '../componants/Avis/Avis'
import Banner from '../componants/Banner/Banner'
import Slideshow from '../componants/Products/SlideShow/Slideshow'
import Team from '../componants/Team/Home/Team'
import WhyUs from '../componants/WhyUS/WhyUs'
import Vendre from '../componants/Vendre/Home/Vendre'
import axios from 'axios'
import { useState } from 'react'
import Location from '../componants/location/Location'
export default function Home({house, agent, searchSelect, avis}) {
  const [scrollTarget, setScrollTarget] = useState(null)
  return (
    <>
      <Banner searchSelect={searchSelect} servicesRef={scrollTarget}/>
      <About/>
      <Slideshow houses={house}/>
      <Vendre/>
      <WhyUs setScrollTarget={setScrollTarget}/>
      <Avis avis={avis}/>
      <Team limit={3} team={agent}/>
      <Location/>
    </>
  )
}

export async function getServerSideProps () {
  // https://api.demetisconseil.fr/wp-json/wp/v2/biens

  const house = await axios.get(`${process.env.NEXT_PUBLIC_API}/biens`)
  .then(res => res.data)
  
  const avis = await axios.get(`${process.env.NEXT_PUBLIC_API}/avis`)
  .then(res => res.data)

  const searchSelect = await axios.get(`${process.env.NEXT_PUBLIC_API}/biens?per_page=100`)
  .then(res => res.data)

  const agent =  await axios.get(`${process.env.NEXT_PUBLIC_API}/agent`)
  .then(res => res.data)
  
  return {
    props: {
      house,
      agent,
      searchSelect,
      avis
    }
  }
}