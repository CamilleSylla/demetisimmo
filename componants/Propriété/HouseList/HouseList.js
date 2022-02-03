import Cards from '../../Products/Cards/Cards'
import style from './houselist.module.scss'
import Link from 'next/link'

export default function HouseList ({houses}) {


    return (
        <div className={style.wrapper}>
            <article className={style.head}>
                <h1>Propriétés de Demetis Immo</h1>
                <p style={{paddingTop: "2vh", fontWeight: "bold"}}>
                    {!houses.length ? "Auncun bien n'est disponible à l'achat" : null}
                    {houses.length == 1 ? "1 bien est disponible à l'achat" : null}
                    {houses.length > 1 ? `${houses.length} biens sont disponibles à l'achat `: null}
                    <Link href="/proprietes"><button style={{fontWeight: "bold", marginLeft : "2vw"}}>Retrouvez tous nos biens</button></Link></p>
            </article>
            <div className={style.list}>
                {houses.map((el, i) => {
                    return <Cards key={i} data={el}/>
                })}
                
            </div>
        </div>
    )
}