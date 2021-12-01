import Illustrate from "./Illustrate/Illustrate";
import style from "./vendre.module.scss";

export default function Vendre() {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <span>Vendre</span>
        <h1>
          Vous <span>accompagnez</span> dans la <span>vente</span> de votre bien.
        </h1>
        <p>
        Vous souhaitez vendre votre bien, nos solutions sont sur mesure, notre priorité est de s’adapter à vos besoins. 
          </p>
          <p>
          Bénéficiez d’une expertise gratuite, nous vous offrons les Diagnostiques lorsque vous nous choisissez en tant qu’interlocuteur unique.
            </p>
        <button>Vendre mon bien</button>
      </div>
      <Illustrate/>
    </section>
  );
}
