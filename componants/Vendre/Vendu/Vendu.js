import style from "./vendu.module.scss";
export default function Accompagnement() {
  return (
    <section className={style.wrapper}>
      <div className={style.illustration}>
        <img src="/img/conseiller.png" />
      </div>
      <article className={style.content}>
        <h1>
          Vous accompagner dans la vente de votre bien
        </h1>
        <p>
        Demetis Immo s’engage à estimer votre bien gratuitement sous 48h.
        <br/>
        Nos négociateurs s’occupent de toutes les étapes nécessaires à la vente de votre bien :        </p>
        <ul>
          <li>
          Publicité sur nos sites partenaires 
          </li>
          <li>
          Organiser les visites avec les prospects qualifiés
          </li>
          <li>
          Bilan mensuel 
          </li>
          <li>
          Prise en charge des diagnostics si vous nous choisissez comme interlocuteur unique
          </li>
        </ul>
        <button>Vendre mon bien</button>
      </article>
    </section>
  );
}
