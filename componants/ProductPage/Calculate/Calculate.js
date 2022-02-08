import { useContext, useEffect, useState } from "react";
import style from "./calculate.module.scss";
import Link from "next/link"
import { TeamContext } from "../../../context/TeamContext";
import { useRouter } from "next/dist/client/router";

export default function Calculate({ prix, eddyProfile }) {
  const [data, setData] = useState({
    price: prix,
    apport: 0,
    taux: 1.05,
    years: 10,
  });
  const router = useRouter()
  const [agent, setAgent] = useContext(TeamContext);
  let result = "Chargement..."
  let pretTotal = ""
  const monthInAYear = 12;
  const yearsArray = [10,15,20,25,30]

  function Calculate() {
    const start = data.price - data.apport;
    const total = start * data.taux;
    const total_month = data.years * monthInAYear;
    const finalResult = total / total_month;
    pretTotal = total
    result = Math.round(finalResult * 100) / 100 ;
    console.log("MONTANT PRET", Math.round(finalResult * 100) / 100);
  }

  const onEtudeClick = () => {
    setAgent(eddyProfile)
    router.push('/equipe')
  }

  Calculate();
  useEffect(() => {
    console.log(data);
  }, [data.apport || data.taux || data.years || data.result]);

  return (
    <section className={style.wrapper}>
              <img className={style.illustration} src='/icon/blue/city.svg'/>
              <img className={style.illustration2} src='/icon/blue/door.svg'/>

      <h1>Calculez votre mensualité !</h1>
      <form>
        <div className={style.input}>
          <input type="number" value={prix} readonly />
        </div>
        <div className={style.input}>
          <input
            type="number"
            placeholder="Votre apport : 0"
            min="1"
            onChange={(e) => setData({ ...data, apport: e.target.value })}
          />
        </div>
        <div className={style.input}>
          <input
            type="number"
            placeholder="Taux d'emprunt : 1.05"
            min="1"
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
      <button onClick={onEtudeClick}>Demander une étude</button>
      <div className={style.result_wrapper}>
        <div className={style.result}>
            <h3>Vos mensualités :</h3>
          <p>{result.toLocaleString() + " "}€ / mois</p>
        </div>
    <p className={style.totalPret}> Coût total du prêt {"(hors assurance)"} : {pretTotal}€</p>
      </div>
      <img className={style.logo} src="/Logo/Logo.jpg"/>
    </section>
  );
}
