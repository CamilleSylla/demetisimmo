import style from "./banner.module.scss";
import Search from "../Search/Search";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";

export default function Banner({servicesRef, searchSelect}) {


  const content = {
    h1: "Un projet, plusieurs pôles, un seul interlocuteur",
    p: "Vous souhaitez vendre ou acheter un bien, nous vous proposons un accompagnement de A à Z.",
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
      <img className={style.img} src="/img/home.jpeg" />
      <div className={style.title}>
      <img className={style.logo} style={{cursor: "pointer"}} src="/Logo/Logo.svg" />
        <h1>{content.h1}</h1>
        <p>{content.p}</p>
        <button onClick={() => servicesRef.current.scrollIntoView()   }>En savoir plus</button>
      </div>
      <span className={style.label}><p>Trouver mon futur investissement</p></span>
      <div className={style.search}>
        {/* <Search searchSelect={searchSelect} button="Rechercher"/> */}
      </div>
    </Layout>
  );
}
