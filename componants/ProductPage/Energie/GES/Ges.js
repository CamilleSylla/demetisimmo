import { useEffect, useRef } from "react";
import style from "./ges.module.scss";

export default function Ges({ ges }) {
  const house_ges = ges;

  const tracker = useRef()
  const cursor = useRef()
  const bareme = [
    {
      name: "A",
      min: 0,
      max: 5,
      color: "#ECD5F2",
    },
    {
      name: "B",
      min: 6,
      max: 10,
      color: "#D6A6CB",
    },
    {
      name: "C",
      min: 11,
      max: 20,
      color: "#C896C1",
    },
    {
      name: "D",
      min: 21,
      max: 35,
      color: "#B883B6",
    },
    {
      name: "E",
      min: 36,
      max: 55,
      color: "#AD76AF",
    },
    {
      name: "F",
      min: 56,
      max: 80,
      color: "#9E64A5",
    },
    {
      name: "G",
      min: 81,
      max: 120,
      color: "#9A0FCF",
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
        <p style={{color: Box[0].color}}>{ges}KgeqCO2/m² .an</p>
      </div>
    );
  };
  return (
      <>
<article className={style.wrapper}>
    <h1>Emission de gaz</h1>
    <RenderGoodPropertie value={ges} />
    </article>
      </>
    
  );
}
