import Cards from '../Cards/Cards'
import style from './slideshow.module.scss'
import Link from 'next/link'
import Layout from '../../Layout/Layout'

export default function Slideshow ({houses}) {

    const filterHouses = houses.filter(el => el.acf.dispo == "Vrai")

    return (
        <Layout>
            <div className={style.content}>
                <span>Acheter</span>
                <h1 className={style.main}>Retrouvez nos derniers biens <span>disponibles</span> vente</h1>
                <div className={style.slideshow}>
                    {filterHouses.map((el, i) => {
                        if (i < 3 )return <Cards key={i} data={el}/>
                        
                    })}
                </div>
            </div>
            <Link href="/proprietes">
                <button className={style.clic}>consulter tous nos biens</button>
                </Link>
        </Layout>
    )
}