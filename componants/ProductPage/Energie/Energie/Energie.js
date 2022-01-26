import { useEffect, useRef } from "react";
import style from "./energie.module.scss";

export default function Energie({ ges }) {
  const house_ges = ges;

  const tracker = useRef();
  const cursor = useRef();
  const bareme = [
    {
      name: "A",
      min: 0,
      max: 50,
      color: "#027313",
    },
    {
      name: "B",
      min: 51,
      max: 90,
      color: "#078C03",
    },
    {
      name: "C",
      min: 91,
      max: 150,
      color: "#C1D911",
    },
    {
      name: "D",
      min: 151,
      max: 230,
      color: "#FFEB29",
    },
    {
      name: "E",
      min: 231,
      max: 330,
      color: "#F2A25C",
    },
    {
      name: "F",
      min: 331,
      max: 450,
      color: "#F26101",
    },
    {
      name: "G",
      min: 451,
      max: 800,
      color: "#D90000",
    },
  ];

  const RenderGoodPropertie = ({ value }) => {
    const Box = bareme.filter((el, i) => {
      if (el.min <= value && value <= el.max) {
        return el;
      }
    });
    return (
      <div className={style.value_wrapper}>
        <div className={style.letter} style={{ background: Box[0].color }}>
          {Box[0].name}
        </div>
        <p style={{color: Box[0].color}}>{ges}KWhEP/m² .an</p>
      </div>
    );
  };

  return (
    <>
      <article className={style.wrapper}>
        <h1>Consommation énergétique</h1>
        <RenderGoodPropertie value={ges} />
      </article>
    </>
  );
}
