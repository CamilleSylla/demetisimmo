import style from "./banner.module.scss";
import Search from "../Search/Search";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";

export default function Banner() {
  const content = {
    h1: "Un projet, plusieurs pôles, un seul interlocuteur",
    p: "Vous souhaitez vendre ou acheter un bien, nous proposons à nos clients un accompagnement de A à Z.",
  };

  const [logo, setLogo] = useState(null)
  useEffect(() => {
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches
    if (isMobile) {
      setLogo(true)
    }
  }, [])

  return (
    <Layout>
      <img className={style.img} src="/img/banner5.jpg" />
      
      <div className={style.title}>
      {logo ?  <img className={style.logo} src="/Logo/Logo.svg"/> : null}
        <h1>{content.h1}</h1>
        <p>{content.p}</p>
        <button>En savoir plus</button>
      </div>
      <span className={style.label}><p>Trouver mon futur investissement</p></span>
      <div className={style.search}>
        <Search button="Rechercher"/>
      </div>
    </Layout>
  );
}
