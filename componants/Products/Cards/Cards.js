import Link from 'next/link'
import style from './cards.module.scss'
import Team from '../../../Json/Team.json'

export default function Cards ({data}) {

    const Disponibilite = () => {

        return (
            <div className={style.disponibility}>
                <p>Disponible</p>
            </div>
        )
    }

    const Agent = () => {
        const agent = Team.find(el => el.id == data.autor )
        return (
            <img src={agent.main_img} className={style.agent}/>
        )
    }

    return (
        <Link href={`/${data.ref}`}>
        <article className={style.wrapper}>
                <Agent/>
            <img className={style.main_img} src={data.main_img}/>
            <span className={style.price}>{data.prix}€</span>
            <h1>{data.title}.</h1>
            <div className={style.infos_icon}>
            <div className={style.icon_wrapper}>
                    <img src="/icon/blue/area.svg"/>
                    <p>{data.surface}m²</p>
                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/piece.svg"/>
                    <p>{data.piece} pcs</p>

                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/bed.svg"/>
                    <p>{data.chambres} chr{data.chambres > 1 ? "s" : null}</p>
                </div>
                <Disponibilite/>
            </div>
        </article>
        </Link>
    )
}