import Illustrate from "./Illustrate/Illustrate";
import style from "./vendre.module.scss";

export default function Vendre() {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <span>Vendre</span>
        <h1>
          Vous <span>accompagnez</span> dans la <span>vente</span> de votre bien
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet nisi vestibulum, efficitur urna in, volutpat libero. In justo
            lorem, sagittis et ex lobortis, gravida molestie lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet nisi vestibulum, efficitur urna in, volutpat libero.
          </p>
        <button>Vendre mon bien</button>
      </div>
      <Illustrate/>
    </section>
  );
}
