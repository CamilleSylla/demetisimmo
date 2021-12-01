import Cards from '../Cards/Cards'
import style from './team.module.scss'

export default function Team ({limit, team}) {

    const smallTeam = team.slice(0, limit)
    return (
        <section className={style.wrapper}>
            <article className={style.intro}>
                <h1>Rencontrez notre équipe <span>d'experts !</span></h1>
                <p>Forte d’une expérience dans le domaine bancaire, des travaux et de l'immobilier, notre équipe se fera un plaisir de vous accompagner dans tous vos projets.</p>
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