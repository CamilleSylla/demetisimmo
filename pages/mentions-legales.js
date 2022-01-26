import axios from 'axios'
import Mention from '../componants/mentions/Mentions'

export default function Home({page}) {
  return (
    <>
    <Mention page={page}/>
    </>
  )
}

export async function getServerSideProps () {

  const page = await axios.get(`${process.env.NEXT_PUBLIC_API}/pages?slug=mentions-legales`)
  .then(res => res.data)
  
  return {
    props: {
        page
    }
  }
}