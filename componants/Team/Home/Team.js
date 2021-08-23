import Cards from '../Cards/Cards'
import style from './team.module.scss'

export default function Team ({limit, team}) {

    const smallTeam = team.slice(0, limit)
    return (
        <section className={style.wrapper}>
            <article className={style.intro}>
                <h1>Rencontrez notre equipe de <span>spécialistes !</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum,</p>
            </article>
            <div className={style.cards_grid}>
                {smallTeam.map((el,i) => {

                    return (
                        <Cards agent={el}/>
                    )
                })}

            </div>
            <button>Consulter toute l'équipe</button>
        </section>
    )
}