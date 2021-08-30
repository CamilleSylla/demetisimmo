import style from './fonctionnement.module.scss'

export default function Fonctionnement () {

    const cardData = [
        {
            title: "Recherche de bien",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada gravida rutrum.",
            icon: "/icon/blue/loupe.svg",
            color: ""
        },
        {
            title: "L'acquisition",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada gravida rutrum.",
            icon: "/icon/blue/key.svg",
            color: ""
        },
        {
            title: "La rénovation",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada gravida rutrum.",
            icon: "/icon/blue/travaux.svg",
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