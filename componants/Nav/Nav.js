import { useEffect, useRef } from 'react'
import style from './nav.module.scss'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Nav () {

    const NavRef = useRef()
    const Logo = useRef()
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
          .to(NavRef.current, {
              background: "#F2F2F2",
              boxShadow: "0px 0px 40px 4px #1c3661"
              
          }, "nav")
          .to(Logo.current, {
              height: "80%",
              bottom: "10%",
          }, "nav")

    }, [])

    return (
        <nav ref={NavRef} className={style.wrapper}>
            <img ref={Logo} src="/Logo/Logo.jpg" />
            <ul>
                {Menu.map((el, i) => {

                    return (
                        <li key={i}> {el.name} </li>
                    )
                })}
            </ul>
            <button>Contact</button>
        </nav>
    )
}