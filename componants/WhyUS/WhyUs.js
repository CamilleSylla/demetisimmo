import Cards from './Cards/Cards'
import style from './whyus.module.scss'

export default function WhyUs () {

    const CardContent = [
        {
            service: "Service 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
            icon: "/jardin.svg",
            link : "/"
        },
        {
            service: "Service 2",
            icon: "/jardin.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
            link : "/"
        },
        {
            service: "Service 3",
            icon: "/jardin.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
            link : "/"
        },
    ]


    return (
        <section className={style.wrapper} > 

        <article className={style.content}>
            <div>
            <h1>Pourquoi nous choisir ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum,</p>
        <button>Nos services</button>
            </div>
            
        </article>
        <div className={style.cards}>
            <div className={style.left}>
                <Cards service={CardContent[0]}/>
            </div>
            <div className={style.right}>
            {CardContent.map((el, i) => {
                if (i == 0 ) return null
                return <Cards service={el}/>
            })}
            </div>
        </div>

        </section>
    )
}