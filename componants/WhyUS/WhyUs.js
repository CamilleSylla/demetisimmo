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
            <li>Besoin d'une étude de financement ?</li>
            <li>Besoins d’un devis de renovation ?</li>
          </ul>
          <p>
            Nous nous engageons à vous accompagner dans chaque étape de votre
            projet
          </p>
          <button>Nos services</button>
        </div>
      </article>
      <Circle />
    </Layout>
  );
}
