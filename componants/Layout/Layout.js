import style from './layout.module.scss'

export default function Layout ({children}) {

    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}