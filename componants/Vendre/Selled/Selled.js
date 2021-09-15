import style from './selled.module.scss'
import houses from '../../../Json/House.json'
import Cards from '../../Products/Cards/Cards'

export default function Selled () {

    return (
        <section className={style.wrapper}>
                <h1>Nos derniers bien <span>vendu</span> ...</h1>
            <div className={style.cards}>
                {houses.map((el,i) => {
                    if (el.disponible == false) {
                        return <Cards data={el}/>
                    }
                })}
            </div>
        </section>
    )
}