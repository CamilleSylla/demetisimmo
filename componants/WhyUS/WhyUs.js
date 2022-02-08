import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useRef } from "react";
import { TeamContext } from "../../context/TeamContext";
import Layout from "../Layout/Layout";
import Circle from "./Circle/Circle";
import style from "./whyus.module.scss";

export default function WhyUs({ setScrollTarget, team }) {
  const scrollRef = useRef();
  const [agent, setAgent] = useContext(TeamContext);
  const route = useRouter()
  const onFinancementClick = () => {
    const findEddy = team.find(info => info.acf.email === "teddy.beasse@demetisimmo.fr")
    if (findEddy) {
      setAgent(findEddy)
      route.push("/equipe")
      return true
    } else {
      route.push("/equipe")
      return false
    }
    
  }

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
            <li onClick={onFinancementClick}><span>?</span><p>Besoin d'une étude de financement ?</p></li>
            <li onClick={() => window.open('https://nos-travaux.fr/')}><span>?</span><p>Besoin d’un devis de rénovation ?</p></li>
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
