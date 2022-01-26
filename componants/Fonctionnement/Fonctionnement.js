import style from './fonctionnement.module.scss'

export default function Fonctionnement () {

    const cardData = [
        {
            title: "Estimation et optimisation",
            desc: "Nos experts sauront mesurer la valeur actuelle de votre bien et comment en tirer le meilleur.",
            icon: "/icon/blue/loupe.svg",
            color: ""
        },
        {
            title: "Diffusion et visite",
            desc: " Demetis Immo mettra ses outils en action pour promouvoir votre bien",
            icon: "/icon/blue/door_open.svg",
            color: ""
        },
        {
            title: "Suivi et accompagnement",
            desc: "Un négociateur dédié vous accompagnera dans le suivi de votre dossier.",
            icon: "/icon/blue/group.svg",
            color: ""
        },
    ]

    const Card = ({el}) => {

        return (
            <article className={style.card}>
                <div className={style.img_wrapper}>
                    <img src={el.icon}/>
                </div>
                <h1 style={{textTreansform: "normal"}}>{el.title}</h1>
                <p> {el.desc} </p>
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.cards_wrapper}>
                {cardData.map((el, i) => {
                    return <Card el={el}/>
                })}
            </div>
        </section>
    )
}