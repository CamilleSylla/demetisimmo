import style from './card.module.scss'

export default function Cards ({agent}) {

    const SocialData = ["/icon/blue/social/facebook.svg","/icon/blue/social/twitter.svg","/icon/blue/social/linkedin.svg"]

    const Social = () => {

        return (
            <div className={style.social}>
                {SocialData.map((el, i) => {
                    
                    return <img src={el} key={i}/>
                })}
            </div>
        )
    }

    return (
        <article className={style.wrapper}>
            <div className={style.border}>
                <Social/>
                </div>
                <img className={style.profile_img} src={agent.main_img}/>
                <div className={style.id}>
                    <h1>{agent.prenom} {agent.nom}</h1>
                    <p>{agent.poste}</p>
                </div>
        </article>
    )
}