import style from './selled.module.scss'
import Cards from '../../Products/Cards/Cards'

export default function Selled ({houses}) {
    return (
        <section className={style.wrapper}>
                <h1>Nos derniers biens vendus</h1>
            <div className={style.cards}>
                {houses.map((el,i) => {
                    if (i <= 2) {
                        return <Cards data={el}/>
                    }
                })}
            </div>
        </section>
    )
}