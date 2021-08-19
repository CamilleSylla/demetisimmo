import { useEffect, useRef } from 'react'
import style from './about.module.scss'
import gsap from 'gsap'

export default function About () {
    
    const Start = useRef()
    const fill = useRef()
    const stroke = useRef()
    const img = useRef()
    const content = useRef()

    useEffect(() => {

        // Illustration //
        gsap.timeline({
            scrollTrigger: {
              trigger: Start.current,
              start: "top bottom",
              end: "top+=90% bottom",
              scrub: 1,
            },
          })
          .from(stroke.current, {
              opacity: 0,
              xPercent: 100,
          }, "square")
          .from(fill.current, {
              opacity: 0,
              xPercent: -100,
          }, "square")
          .from(img.current, {
              opacity: 0,
              yPercent: -100,
          }, "square")

          // Content //
          gsap.from(content.current, {
              opacity: 0,
              duration: 1,
              scrollTrigger: {
                  trigger: Start.current,
                  start: "top+=20% bottom",
              }
          })
    }, [])

    return (
        <section ref={Start} className={style.wrapper}>
            <div className={style.img_wrapper}>
                <div ref={fill} className={style.background}/>
                <div ref={stroke} className={style.background} style={{background : "transparent", border: "2px solid #1c3661", left: "5vw", top: "45%", borderBottomLeftRadius: "80px", }}/>
                <img ref={img} src='/img/banner2.jpg'/>
            </div>
            <article ref={content} className={style.content}>
                <div>
                <span>A propos</span>
                <h1>Nous fournissons les <span>meilleurs biens</span>  immobiliers !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum, efficitur urna in, volutpat libero. In justo lorem, sagittis et ex lobortis, gravida molestie lorem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi vestibulum, efficitur urna in, volutpat libero.</p>
                <div className={style.action}>
                    <button>Nos services</button>
                    <button>Notre équipe</button>
                </div>
                </div>
            </article>
        </section>
    )
}