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
        name: "Propriétés",
        url: "proprietes"
    },
    {
        name: "Notre Équipe",
        url: "equipe"
    },
]

export default function NavLinks ({close}) {

    return (
        <ul>
                {Menu.map((el, i) => {

                    return (
                        <Link href={`/${el.url}`}>
                            <li onClick={() => close(false)} key={i}> {el.name} </li>
                        </Link>
                    )
                })}
                <Link href="/contact">
                            <li className={style.contact} onClick={() => close(false)} > contact </li>
                        </Link>
            </ul>
    )
}