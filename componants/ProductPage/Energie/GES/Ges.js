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

  function CursorPosition(value) {
    let NodeIndex;
    const Boxes = Array.from(tracker.current.childNodes).filter(el=> el.className == "ges_letter__2wvWa")
    const item = bareme.filter((el, i) => {
      if (el.min <= value && value <= el.max) {
        NodeIndex = i;
        return el;
      }
    });
    cursor.current.style.left = `${Boxes[NodeIndex].getBoundingClientRect().x}px`
    cursor.current.style.top = `${tracker.current.getBoundingClientRect().top}px`
  }

  useEffect(() => {
      CursorPosition(house_ges);
  }, [])

  return (
      <>
      <div ref={cursor} className={style.cursor}>
          <div className={style.bar} />
          <div className={style.ges_value}>
            <p>
              {house_ges} <span>KgeqCO2/m² .an</span>
            </p>
          </div>
        </div>
<article className={style.wrapper}>
    <h1>Emission de gaz</h1>
      <div ref={tracker} className={style.letter_wrap}>
        {bareme.map((el, i) => {
          return (
            <div className={style.letter} key={i} style={{ background: el.color }}>
              {el.name}
            </div>
          );
        })}
      </div>
    </article>
      </>
    
  );
}
