import { useEffect, useState } from "react";
import style from "./calculate.module.scss";

export default function Calculate({ prix }) {
    const [data, setData] = useState({
        price: prix,
        apport: 0,
        taux: 1.05,
        years: 30,
        result: "Chargement..."
    })
    const monthInAYear = 12

    function Calculate () {
        const start = data.price - data.apport
        const total = start*data.taux
        const total_month = data.years * monthInAYear
        const finalResult = total/total_month
        setData({...data, result: Math.round(finalResult * 100)/100})
        console.log("MONTANT PRET",Math.round(finalResult * 100) / 100);
    }

    useEffect(() => {
Calculate()
console.log(data);
    }, [])

  return (
    <section className={style.wrapper}>
      <h1>Calculez votre mensualité</h1>
      <form>
        <div className={style.input}>
          <input type="number" value={prix} readonly />
        </div>
        <div className={style.input}>
          <input type="number" placeholder="Votre apport : 0" onChange={e => setData({...data, apport : e.target.value})}/>
        </div>
        <div className={style.input}>
          <input type="number" placeholder="Taux d'emprunt : 1.05" />
        </div>
        <div className={style.input}>
          <select>
            <option>30 ans</option>
          </select>
        </div>
      </form>
      <button>Demander une étude</button>
      <div>{data.result.toLocaleString()+ " "}€</div>
    </section>
  );
}
