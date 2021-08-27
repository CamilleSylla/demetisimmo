import style from './fonctionnement.module.scss'

export default function Fonctionnement () {

    const cardData = [
        {
            title: "Discutons de votre projet",
            desc: "Lorem ipsum ",
            icon: "/icon/blue/area.svg",
            color: ""
        },
        {
            title: "Discutons de votre projet",
            desc: "Lorem ipsum ",
            icon: "/icon/blue/area.svg",
            color: ""
        },
        {
            title: "Discutons de votre projet",
            desc: "Lorem ipsum ",
            icon: "/icon/blue/area.svg",
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
                <p> {el.desc} </p>
            </article>
        )
    }

    return (
        <section className={style.wrapper}>
            <h1>Un fonctionnement simple</h1>
            <div className={style.cards_wrapper}>
                {cardData.map((el, i) => {
                    return <Card el={el}/>
                })}
            </div>
        </section>
    )
}