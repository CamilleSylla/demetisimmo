import Map from "../Propriété/Map/Map";
import Link from "next/link";
import style from "./location.module.scss";

export default function Location() {
  return (
    <div className={style.location}>
      <article className={style.content}>
          <div className={style.container}>
        <h1>Nous rencontrer !</h1>
        <ul>
          <li>3 place du 117ème régiment d'infenterie</li>
          <li>72000, LE MANS</li>
          <li>02 43 52 49 86</li>
          <li>contact@dematisimmo.fr</li>
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
