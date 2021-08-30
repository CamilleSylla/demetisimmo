import { func } from "prop-types";
import { useEffect, useRef } from "react";
import style from "./circle.module.scss";

export default function Circle() {

    const inside = useRef()
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
    //   inside.map(el => console.log(el))
console.log(inside.current.childNodes);
inside.current.childNodes.forEach(el => {
    el.addEventListener("mouseenter", function () {
console.log(yo);
    })
})
  }, [])

  return (
    <section className={style.wrapper}>
        <span>Accompagnement à 360°</span>
        {/*around circle*/}
      {CardContent.map((el, i) => {
        return (
          <article data-key={i} key={i}>
              <img src={`/icon/blue/${el.icon}`} />
            <h1>{el.service}</h1>
          </article>
        );
      })}
      {/*inside circle*/}
      <span ref={inside} >
      {CardContent.map((el, i) => {
        return (
          <div data-key={i} className={style.inside} key={i}>
              <img src={`/icon/blue/${el.icon}`} />
            <h1>{el.service}</h1>
            <p>{el.desc}</p>
            <button>Contact</button>
          </div>
        );
      })}
      </span>
     
    </section>
  );
}
