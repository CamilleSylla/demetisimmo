import style from './nav.module.scss'

export default function Nav () {

    const Menu = [
        {
            name: "Accueil",
            url: ""
        },
        {
            name: "Services",
            url: ""
        },
        {
            name: "Propriétés",
            url: ""
        },
        {
            name: "Notre Équipe",
            url: ""
        },
    ]

    return (
        <nav className={style.wrapper}>
            <img src="/Logo/Logo.jpg" />
            <ul>
                {Menu.map((el, i) => {

                    return (
                        <li> {el.name} </li>
                    )
                })}
            </ul>
            <button>Contact</button>
        </nav>
    )
}