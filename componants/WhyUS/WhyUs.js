import { useEffect, useRef } from "react";
import Layout from "../Layout/Layout";
import Circle from "./Circle/Circle";
import style from "./whyus.module.scss";

export default function WhyUs({ setScrollTarget }) {
  const scrollRef = useRef();

  useEffect(() => {
    setScrollTarget(scrollRef);
  }, []);
  return (
    <Layout>
      <article ref={scrollRef} className={style.content}>
        <div>
          <span>Nos Services</span>
          <h1>Pourquoi nous choisir ?</h1>
          <p>
            Notre force, c’est l’interprofessionnalité et c’est ce qui nous
            permet de répondre à l’ensemble de vos besoins :
          </p>
          <ul>
            <li><span>?</span><p>Besoin d'une étude de financement ?</p></li>
            <li style={{cursor: "pointer"}} onClick={() => window.open('https://nos-travaux.fr/')}><span>?</span><p>Besoin d’un devis de rénovation ?</p></li>
          </ul>
          <p>
            Nous nous engageons à vous accompagner dans chaque étape de votre
            projet.
          </p>
        </div>
      </article>
      <Circle />
    </Layout>
  );
}
