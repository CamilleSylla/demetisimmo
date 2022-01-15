import { useEffect, useRef } from "react";
import style from "./about.module.scss";
import gsap from "gsap";
import Layout from "../Layout/Layout";
import Link from 'next/link'

export default function About() {
  const Start = useRef();
  const fill = useRef();
  const stroke = useRef();
  const img = useRef();
  const content = useRef();

  useEffect(() => {
     
      gsap
      .timeline({
        scrollTrigger: {
          trigger: Start.current,
          start: "top bottom",
          end: "top+=90% bottom",
          scrub: 1,
          markers: true
        },
      })
      .from(
        stroke.current,
        {
          opacity: 0,
          xPercent: 100,
        },
        "square"
      )
      .from(
        fill.current,
        {
          opacity: 0,
          xPercent: -100,
        },
        "square"
      )
      .from(
        img.current,
        {
          opacity: 0,
          yPercent: -100,
        },
        "square"
      );

    // Content //
    gsap.from(content.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: Start.current,
        start: "top+=20% bottom",
      },
    });
    
    
  }, []);

  return (
    <Layout>
      <div ref={Start} >
        <div className={style.img_wrapper}>
          <div ref={fill} className={style.background} />
          <div
            ref={stroke}
            className={style.background}
            style={{
              background: "transparent",
              border: "2px solid #1c3661",
              left: "5vw",
              top: "45%",
              borderBottomLeftRadius: "80px",
            }}
          />
          <img ref={img} src="/img/banner2.jpg" />
        </div>
        <article ref={content} className={style.content}>
          <div>
            <span>A propos</span>
            <h1>
              Une <span>interprofessionnalité</span> au service de nos clients.
            </h1>
            <p>
              Demetis immo est le résultat d’une fusion entre un cabinet de
              gestion de patrimoine, un courtier en financement et une
              entreprise généraliste du bâtiment.
            </p>
            <p>
              Lors de l’achat d’un bien immobilier, plusieurs points sont
              primordiaux, le montage de votre dossier de financement,
              l’expertise immobilière et celle des travaux, ou même la fiscalité
              si c’est un investissement locatif.
            </p>
            <p>
              Grace à nos différents pôles, vous bénéficierez d’un
              accompagnement complet et précis sans démultiplier vos
              interlocuteurs.
            </p>
            <div className={style.action}>
              <Link href="/equipe">
              <button>Notre équipe</button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
