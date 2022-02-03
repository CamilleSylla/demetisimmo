import Cards from '../../Products/Cards/Cards'
import style from './houselist.module.scss'
import Link from 'next/link'

export default function HouseList ({houses}) {


    return (
        <div className={style.wrapper}>
            <article className={style.head}>
                <h1>Propriétés de Demetis Immo</h1>
                <p>{houses.length} biens sont disponibles a l'achat {houses.length ? null : (<Link href="/proprietes"><span style={{fontWeight: "bold"}}>Retrouvez tous nos biens</span></Link>)}</p>
            </article>
            <div className={style.list}>
                {houses.map((el, i) => {
                    return <Cards key={i} data={el}/>
                })}
                
            </div>
        </div>
    )
}