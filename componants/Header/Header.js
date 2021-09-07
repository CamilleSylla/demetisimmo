import style from './header.module.scss'

export default function Header ({pageTitle, desc}) {

    return (
        <header className={style.wrapper}>
            <div className={style.title}>
                <h1>{pageTitle}</h1>
                <p> {desc} </p>
            </div>
        </header>
    )
}