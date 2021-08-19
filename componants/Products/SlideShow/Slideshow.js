import Cards from '../Cards/Cards'
import style from './slideshow.module.scss'

export default function Slideshow ({houses}) {

    return (
        <section className={style.wrapper}>
            <div className={style.content}>
                <h1>Retrouvez nos derniers biens <span>disponibles</span> vente</h1>
                <div className={style.slideshow}>
                    {houses.map((el, i) => {
                        return <Cards key={i} data={el}/>
                    })}
                </div>
            </div>
                <button>consulter tous nos biens</button>
        </section>
    )
}