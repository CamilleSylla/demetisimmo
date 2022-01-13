import Link from 'next/link'

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
            </ul>
    )
}