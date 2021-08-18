import style from './about.module.scss'

export default function About () {

    return (
        <section className={style.wrapper}>
            <div className={style.img_wrapper}>
                <div className={style.background}/>
                <img src='/img/banner2.jpg'/>
            </div>
            <article className={style.content}>
                <div>
                <span>A propos</span>
                <h1>Nous fournissons les <span>meilleurs biens</span>  immobiliers !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum, efficitur urna in, volutpat libero. In justo lorem, sagittis et ex lobortis, gravida molestie lorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum, efficitur urna in, volutpat libero.</p>
                <div className={style.action}>
                    <button>Nos services</button>
                    <button>Notre équipe</button>
                </div>
                </div>
            </article>
        </section>
    )
}