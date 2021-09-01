import style from './cards.module.scss'

export default function Cards ({service}) {

    

    return (
        <article className={style.wrapper}>
            <img src={`/icon/blue/${service.icon}`}/>
            <h1>{service.service}</h1>
            <p>{service.desc}</p>
            <button>En savoir plus</button>

        </article>
    )
}