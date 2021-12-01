import Circle from "./Circle/Circle";
import style from "./whyus.module.scss";

export default function WhyUs() {

  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        <div>
            <span>Nos Services</span>
          <h1>Pourquoi nous choisir ?</h1>
          <p>
          Nous travaillons en interprofessionnalité, ce qui permet de répondre à vos besoins :
          </p>
          <ul>
            <li>Besoin d'une étude de financement ?</li>
            <li>Besoins d’un devis de renovation ?</li>
            </ul>
            <p>
            Nous nous engageons a vous accompagné dans chaque étape de votre projet.
            </p>
            <p>
            Gagnez du temps en ayant qu'un seul interlocuteur
              </p>
          <button>Nos services</button>
        </div>
      </article>
        <Circle />
    </section>
  );
}
