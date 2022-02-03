import Map from "../Propriété/Map/Map";
import Link from "next/link";
import style from "./location.module.scss";

export default function Location() {
  return (
    <div className={style.location}>
      <article className={style.content}>
          <div className={style.container}>
              <img src="/Logo/Logo_w.svg"/>
        <h1>Nous rencontrer</h1>
        <ul>
          <li>5 place du 117ème régiment d'infanterie</li>
          <li>72000, LE MANS</li>
          <li style={{cursor: "pointer", fontWeight: "bold"}} onClick={() => window.open('tel:02 43 52 49 86')}>02 43 52 49 86</li>
          <li style={{cursor: "pointer", fontWeight: "bold"}} onClick={() => window.open('mailto:contact@demetisimmo.fr')}>contact@demetisimmo.fr</li>
        </ul>
        <Link href="/contact">
          <button>Contact</button>
        </Link>
          </div>
      </article>
      <Map />
    </div>
  );
}
