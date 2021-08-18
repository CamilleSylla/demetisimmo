import style from "./banner.module.scss";
import Search from "../Search/Search";

export default function Banner() {
  const content = {
    h1: "Vos projets immobilier simplement et rapidement",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque tellus orci, quis laoreet augue aliquet sed..",
  };

  return (
    <section className={style.wrapper}>
      <img src="/img/banner5.jpg" />
      <div className={style.title}>
        <h1>{content.h1}</h1>
        <p>{content.p}</p>
        <button>En savoir plus</button>
      </div>
      <span><p>Trouver mon futur investissement</p></span>
      <div className={style.search}>
        <Search button="Rechercher"/>
      </div>
    </section>
  );
}
