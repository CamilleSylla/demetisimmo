import style from './fonctionnement.module.scss'

export default function Fonctionnement () {

    const cardData = [
        {
            title: "Recherche de bien",
            desc: ["Accompagnement dans la visite", "Étude de projet (rentabilité, faisabilité etc...)", "Définition de l'enveloppe travaux."],
            icon: "/icon/blue/area.svg",
            color: ""
        },
        {
            title: "L'acquisition",
            desc: ["prise en charge de A a Z avec nos partenaires notaires", "Édition des devis travauux"],
            icon: "/icon/blue/area.svg",
            color: ""
        },
        {
            title: "La rénovation",
            desc: ["Tarifs pré-négociés avec nos partenaires", "Mise aux goûts du jour", "Suivi des travux"],
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
                <ul>
                    {el.desc.map((el, i) => {
                        return <li key={i}>{el}</li>
                    })}
                </ul>
                {/* <p> {el.desc} </p> */}
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