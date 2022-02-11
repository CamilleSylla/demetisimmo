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
      service: "Gestion de patrimoine ",
      icon: "/colonne.svg",
      desc: "investissements immobiliers sur mesure, placements financiers, dispositifs de réduction d’impôts, préparation de votre retraite… Notre équipe vous propose un accompagnement basé sur la confiance et la confidentialité.",
      link: "/",
    },
    {
      service: "Service financement",
      icon: "/euro.svg",
      desc: "Vous recherchez le meilleur taux pour votre prêt immobilier ? Notre pôle vous accompagne dans vos démarches.",
      link: "/",
    },
    {
      service: "Travaux",
      icon: "/travaux.svg",
      desc: "Qu’il s’agisse de votre résidence principale ou d’un investissement locatif, nous réalisons tous types de travaux. Notre équipe qualifiée et expérimentée est à votre disposition pour la création de vos futurs projets.",
      link: "/",
    },
    {
      service: "Transaction Immobilière",
      desc: "Un projet unique, plusieurs pôles, un seul interlocuteur pour vous accompagner dans vos projets immobiliers.",
      icon: "/transaction.svg",
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
  }, [hover]);

  return (
    <section ref={animation_start} className={style.wrapper}>
      <img ref={animation_arrow} className={style.spinning} src="/icon/blue/recycle.svg" />
      <div ref={animation_360} className={style.acc360}>
        <img src="/icon/blue/360.svg"/>
      </div>
      {/*around circle*/}
      <span ref={circle}>
        {CardContent.map((el, i) => {
          return (
            <article data-key={i} key={i}>
              <img src={`/icon/blue/${el.icon}`} />
              <h1 style={{width: "80%"}}>{el.service}</h1>
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
              <p style={{width: "65%", maxHeight: "20%", overflowY: "scroll", overflowX: "hidden"}}>{el.desc}</p>
              {/* <button>Contact</button> */}
            </div>
          );
        })}
      </span>
    </section>
  );
}
