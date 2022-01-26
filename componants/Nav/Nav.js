import { useEffect, useRef } from 'react'
import style from './nav.module.scss'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from 'next/link'
import NavLinks from './NavLinks/NavLinks';
import { useRouter } from 'next/dist/client/router';

export default function Navigation () {

    const NavRef = useRef()
    const Logo = useRef()
    const router = useRouter().asPath
    console.log(router === "/");
    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const anim = gsap
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
    }, [router])

    return (
        <div className={style.container}>
            <div ref={NavRef} className={style.background}/>
            <Link href="/">
           <img style={{cursor: "pointer"}} src="/Logo/Logo.svg" />
            
            </Link>
            <NavLinks/>
            <Link href="/contact">
            <button>Contact</button>
            </Link>
        </div>
    )
}