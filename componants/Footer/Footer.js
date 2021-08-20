import style from './footer.module.scss'

export default function Footer () {

    return (
        <footer className={style.wrapper}>
            <div className={style.content}>
            <div>
                <img src="/Logo/Logo.jpg"/>
                <p>Retrouvez nous sur les reseaux sociaux !</p>
            </div>
            </div>
            <div className={style.legal}>

            </div>

        </footer>
    )
}