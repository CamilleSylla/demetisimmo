import style from "./vendu.module.scss";
export default function Accompagnement() {
  return (
    <section className={style.wrapper}>
      <div className={style.illustration}>
        <img src="/img/conseiller.png" />
      </div>
      <article className={style.content}>
        <span>L'accompagnement</span>
        <h1>
          Vous <span>accompagnez</span> dans la <span>vente</span> de votre bien
        </h1>
        <p>
        Demetis Immo s’engage à estimer votre bien gratuitement sous 48h.
        <br/>
        Nos négociateurs, s’occuperont de toutes les étapes nécessaires à la vente de votre bien : 
        </p>
        <ul>
          <li>
          Photos professionelles
          </li>
          <li>
          Publicité sur les sites spécialisé
          </li>
          <li>
          Organisé les visites avec des prospects qualifiés
          </li>
          <li>
          Compte rendu de visites
          </li>
          <li>
          Bilan mensuelle
          </li>
          <li>
          Prise en charge des diagnostics si vous nous choisissez comme interlocuteur uniques
          </li>
        </ul>
        <button>Vendre mon bien</button>
      </article>
    </section>
  );
}
