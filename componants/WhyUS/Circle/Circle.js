import { useEffect, useRef, useState } from "react";
import style from "./circle.module.scss";
import gsap from 'gsap'

export default function Circle() {
  const [hover, setHover] = useState(null);
  const [disable, setDisable] = useState(false)
  const animation_start = useRef()
  const animation_arrow = useRef()
  const animation_360 = useRef()
  const circle = useRef();
  const inside = useRef();

  const CardContent = [
    {
      service: "Transaction Immobilière",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
      icon: "/transaction.svg",
      link: "/",
    },
    {
      service: "Service financement",
      icon: "/euro.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
      link: "/",
    },
    {
      service: "Travaux",
      icon: "/travaux.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
      link: "/",
    },
    {
      service: "Gestion de patrimoine ",
      icon: "/colonne.svg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum justo sed diam",
      link: "/",
    },
  ];

  useEffect(() => {
    setDisable(null)
    for (let i = 0; i < circle.current.childNodes.length; i++) {
      // Mouse Enter
      circle.current.childNodes[i].addEventListener(
        "mouseenter",
        (event) => {
          setHover(event.srcElement.dataset.key);
        },
        false
      );
      //Mouse Leave
      circle.current.childNodes[i].addEventListener(
        "mouseleave",
        (event) => {
          setHover(null);
        },
        false
      );

      for (let i = 0; i < inside.current.childNodes.length; i++) {
        if (i == hover) {
          console.log("53", i);
          inside.current.childNodes[i].style.opacity = 1;
          inside.current.childNodes[i].style.zIndex = 4;
        } else {
          inside.current.childNodes[i].style.opacity = 0;
          inside.current.childNodes[i].style.zIndex = 0;
        }
      }
    }

      gsap.timeline({
        scrollTrigger: {
          trigger: animation_start.current,
          start: "top bottom",
          markers: true
        },
      })
      .from(animation_start.current, {
        opacity: 0,
        duration: 1
      })
      .from(circle.current.childNodes, {
        opacity: 0,
        duration: .5,
        stagger: .5
      })
      .from(animation_arrow.current, {
        opacity : 0,
        duration: 1
      })
      .from(animation_360.current, {
        scale : 0,
        duration: .5
      }, "-=.5")
    

    
  }, [hover]);

  return (
    <section ref={animation_start} className={style.wrapper}>
      <img ref={animation_arrow} className={style.spinning} src="/icon/blue/recycle.svg" />
      <div ref={animation_360} className={style.acc360}>
        <p>
          Accompagnement à
        </p>
        <img src="/icon/blue/360.svg"/>
      </div>
      {/*around circle*/}
      <span ref={circle}>
        {CardContent.map((el, i) => {
          return (
            <article data-key={i} key={i}>
              <img src={`/icon/blue/${el.icon}`} />
              <h1>{el.service}</h1>
            </article>
          );
        })}
      </span>
      {/*inside circle*/}
      <span ref={inside}>
        {CardContent.map((el, i) => {
          return (
            <div data-key={i} className={style.inside} key={i}>
              <img src={`/icon/blue/${el.icon}`} />
              <h1>{el.service}</h1>
              <p>{el.desc}</p>
              {/* <button>Contact</button> */}
            </div>
          );
        })}
      </span>
    </section>
  );
}
