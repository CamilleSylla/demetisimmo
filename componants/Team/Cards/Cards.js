import style from './card.module.scss'
import Link from 'next/link'

export default function Cards ({agent}) {

    const Social = ({url}) => {
        return (
            <div className={style.social}>
                     <img onClick={() => window.open(url)} src="/icon/blue/social/linkedin.svg" />
            </div>
        )
    }

    return (
        <Link href="/equipe">
        <article className={style.wrapper}>
            <div className={style.border}>
                <Social url={agent.acf.lkd}/>
                </div>
                <img className={style.profile_img} src={agent.acf.vignette}/>
                <div className={style.id}>
                    <h1>{agent.title.rendered}</h1>
                    <p>{agent.acf.poste}</p>
                </div>
        </article>
        </Link>
    )
}