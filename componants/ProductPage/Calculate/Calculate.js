import { useEffect, useState } from "react";
import style from "./calculate.module.scss";

export default function Calculate({ prix }) {
  const [data, setData] = useState({
    price: prix,
    apport: 0,
    taux: 1.05,
    years: 10,
  });
  let result = "Chargement..."
  const monthInAYear = 12;
  const yearsArray = [10,15,20,25,30]

  function Calculate() {
    const start = data.price - data.apport;
    const total = start * data.taux;
    const total_month = data.years * monthInAYear;
    const finalResult = total / total_month;
    result = Math.round(finalResult * 100) / 100 ;
    console.log("MONTANT PRET", Math.round(finalResult * 100) / 100);
  }

  Calculate();
  useEffect(() => {
    console.log(data);
  }, [data.apport || data.taux || data.years || data.result]);

  return (
    <section className={style.wrapper}>
              <img className={style.illustration} src='/icon/blue/city.svg'/>
              <img className={style.illustration2} src='/icon/blue/door.svg'/>

      <h1>Calculez votre mensualité</h1>
      <form>
        <div className={style.input}>
          <input type="number" value={prix} readonly />
        </div>
        <div className={style.input}>
          <input
            type="number"
            placeholder="Votre apport : 0"
            onChange={(e) => setData({ ...data, apport: e.target.value })}
          />
        </div>
        <div className={style.input}>
          <input
            type="number"
            placeholder="Taux d'emprunt : 1.05"
            onChange={(e) => setData({ ...data, taux: e.target.value })}
          />
        </div>
        <div className={style.input}>
          <select onChange={(e) => setData({ ...data, years: e.target.value })}>
              {yearsArray.map((el,i) => {
                  return <option value={el}>{el} ans</option>
              })}
          </select>
        </div>
      </form>
      <button>Demander une étude</button>
      <div className={style.result_wrapper}>
        <div className={style.result}>
            <h3>Vos mensualités :</h3>
          <p>{result.toLocaleString() + " "}€ / mois</p>
        </div>
      </div>
      <img className={style.logo} src="/Logo/Logo.jpg"/>
    </section>
  );
}
