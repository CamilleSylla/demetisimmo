import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from '../NavBar/navbar.module.scss'

const Menu = [
    {
        name: "Accueil",
        url: ""
    },
    {
        name: "Vendre",
        url: "vendre"
    },
    {
        name: "Acheter",
        url: "proprietes"
    },
    {
        name: "Notre équipe",
        url: "equipe"
    },
]

export default function NavLinks ({close}) {

    const [mobile, setMobile] = useState(null)

    useEffect(() => {

        let isMobile = window.matchMedia("only screen and (max-width: 990px)").matches
        if (isMobile) setMobile(true)
    }, [])
    return (
        <ul>
                {Menu.map((el, i) => {

                    return (
                        <Link href={`/${el.url}`}>
                            <li onClick={() => mobile ? close(false) : null} key={i}> {el.name} </li>
                        </Link>
                    )
                })}
                <Link href="/contact">
                            <li className={style.contact} onClick={() => close(false)} > contact </li>
                        </Link>
            </ul>
    )
}