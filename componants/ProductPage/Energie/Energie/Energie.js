import { useEffect, useRef } from 'react';
import style from './energie.module.scss'

export default function Energie ({ges}) {
    const house_ges = ges;

  const tracker = useRef()
  const cursor = useRef()
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

      function CursorPosition(value) {
        let NodeIndex;
        const Boxes = Array.from(tracker.current.childNodes).filter(el=> el.className == "energie_letter__1bBDV")
        const item = bareme.filter((el, i) => {
          if (el.min <= value && value <= el.max) {
            NodeIndex = i;
            return el;
          }
        });
        console.log("All boxes",Boxes);
        console.log("Found good box",Boxes[NodeIndex]);
        console.log("Get Position",tracker.current.getBoundingClientRect());
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
                {house_ges} <span>KWhEP/m²
.an</span>
              </p>
            </div>
          </div>
  <article className={style.wrapper}>
      <h1>Consommation énergétique</h1>
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