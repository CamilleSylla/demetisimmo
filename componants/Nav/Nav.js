import { useEffect, useRef } from 'react'
import style from './nav.module.scss'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import NavLinks from './NavLinks/NavLinks';

export default function Navigation () {

    const NavRef = useRef()
    const Logo = useRef()
    

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
              top: "10%",
              bottom: "10%",
          }, "nav")

    }, [])

    return (
        <div className={style.container}>
            <div ref={NavRef} className={style.background}/>
            <Link href="/">

            <img style={{cursor: "pointer"}} ref={Logo} src="/Logo/Logo.svg" />
            </Link>
            <NavLinks/>
            <Link href="/contact">
            <button>Contact</button>
            </Link>
        </div>
    )
}