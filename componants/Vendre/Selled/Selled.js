import style from './selled.module.scss'
import Cards from '../../Products/Cards/Cards'

export default function Selled ({houses}) {

    return (
        <section className={style.wrapper}>
                <h1>Nos derniers bien <span>vendu</span> ...</h1>
            <div className={style.cards}>
                {houses.map((el,i) => {
                        return <Cards data={el}/>
                })}
            </div>
        </section>
    )
}