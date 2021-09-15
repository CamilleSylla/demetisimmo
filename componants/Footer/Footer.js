import Link from "next/link";
import style from "./footer.module.scss";

export default function Footer() {
  const Menu = [
    {
      name: "Accueil",
      url: "",
    },
    {
      name: "Vendre",
      url: "vendre",
    },
    {
      name: "Propriétés",
      url: "proprietes",
    },
    {
      name: "Notre Équipe",
      url: "equipe",
    },
    {
      name: "Contact",
      url: "contact",
    },
  ];
  const Partenaire = [
      {
        name: "Demetis Conseil",
        url: "https://www.demetisconseil.fr",
      },
  ]
  const Confidentialité = [
      {
        name: "Informations légales",
        url: "/",
      },
      {
        name: "Politique de protection des données",
        url: "/",
      },
      {
        name: "Politique des cookies",
        url: "/",
      },
      {
        name: "Gestion des cookies",
        url: "/",
      },
  ]

  return (
    <footer className={style.wrapper}>
      <div className={style.content}>
        <div>
          <img src="/Logo/Logo_w.svg" />
          <p style={{width: "10vw", fontSize: ".5rem", lineHeight: "initial"}}>
              Copyright 2021 DemetisImmo<br/>Tous droits réservés.
              </p>
        </div>
        <div>
          <p>Plan du site</p>
          <ul>
            {Menu.map((el, i) => {
              return (
                <Link key={i} href={`/${el.url}`}>
                  <li>{el.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <p>Partenaires</p>
          <ul>
            {Partenaire.map((el, i) => {
              return (
                  <li onClick={() => window.open(el.url)}>{el.name}</li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>Confidentialité</p>
          <ul>
            {Confidentialité.map((el, i) => {
              return (
                <Link key={i} href={el.url}>
                  <li>{el.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={style.legal}>
          <p>Design and developped by<a href="https://www.iconicdev.fr">{" "} Camille Sylla - IconicDev</a></p>
      </div>
    </footer>
  );
}
