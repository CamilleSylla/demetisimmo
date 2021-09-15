import style from './houselist.module.scss'
import houses from '../../../Json/House.json'
import Cards from '../../Products/Cards/Cards'

export default function HouseList ({houses}) {


    return (
        <div className={style.wrapper}>
            <article className={style.head}>
                <h1>Propriétes de Demetis Immo</h1>
                <p>{houses.length} biens sont disponibles a l'achat</p>
            </article>
            <div className={style.list}>
                {houses.map((el, i) => {
                    return <Cards key={i} data={el}/>
                })}
                
            </div>
        </div>
    )
}