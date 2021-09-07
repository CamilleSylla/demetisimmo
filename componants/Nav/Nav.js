import { useEffect, useRef } from 'react'
import style from './nav.module.scss'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from 'next/link'

export default function Nav () {

    const NavRef = useRef()
    const Logo = useRef()
    const Menu = [
        {
            name: "Accueil",
            url: "/"
        },
        {
            name: "Vendre",
            url: "/vendre"
        },
        {
            name: "Propriétés",
            url: "/proprietes"
        },
        {
            name: "Notre Équipe",
            url: "/"
        },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "top+=5% top",
              scrub: .3,
            },
          })
          .from(NavRef.current, {
              opacity: 0
          }, "nav")
          .to(Logo.current, {
              height: "80%",
              bottom: "10%",
          }, "nav")

    }, [])

    return (
        <nav  className={style.wrapper}>
            <div ref={NavRef} className={style.background}/>
            <img ref={Logo} src="/Logo/Logo.jpg" />
            <ul>
                {Menu.map((el, i) => {

                    return (
                        <Link href={`/${el.url}`}>
                            <li key={i}> {el.name} </li>

                        </Link>
                    )
                })}
            </ul>
            <button>Contact</button>
        </nav>
    )
}