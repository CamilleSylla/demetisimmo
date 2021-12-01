import style from "./banner.module.scss";
import Search from "../Search/Search";

export default function Banner() {
  const content = {
    h1: "Un projet, plusieurs pôles, un seul interlocuteur",
    p: "Vous souhaitez vendre ou acheter un bien, nous proposons à nos clients un accompagnement de A à Z.",
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
