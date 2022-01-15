import style from './fonctionnement.module.scss'

export default function Fonctionnement () {

    const cardData = [
        {
            title: "Estimation et Optimisation",
            desc: "Nos experts sauront mesurer la valeur actuelle de votre bien et comment en tirer le meilleur.",
            icon: "/icon/blue/loupe.svg",
            color: ""
        },
        {
            title: "Diffusion et Visite",
            desc: "Demetis Immo mettra tes ses outils en actions pour promouvoir votre bien.",
            icon: "/icon/blue/door_open.svg",
            color: ""
        },
        {
            title: "Suivi et Accompagnement",
            desc: "Un conseiller dedier vous sera attitré afin de suivre votre dossier.",
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
                <h1>{el.title}</h1>
                {/* <ul>
                    {el.desc.map((el, i) => {
                        return <li key={i}>{el}</li>
                    })}
                </ul> */}
                <p> {el.desc} </p>
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.title}>
                <span>Fonctionnement</span>
            <h1>Un fonctionnement simple</h1>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada gravida rutrum.</p>

            </div>
            <div className={style.cards_wrapper}>
                {cardData.map((el, i) => {
                    return <Card el={el}/>
                })}
            </div>
        </section>
    )
}