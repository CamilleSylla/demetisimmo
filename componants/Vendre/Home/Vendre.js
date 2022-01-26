import Layout from "../../Layout/Layout";
import Illustrate from "./Illustrate/Illustrate";
import style from "./vendre.module.scss";
import Link from "next/link";

export default function Vendre() {
  return (
    <Layout>
      <Illustrate />
      <div className={style.content}>
        <span>Vendre</span>
        <h1>Vous accompagner dans la vente de votre bien</h1>
        <p>
          Vous souhaitez vendre votre bien, nos solutions sont sur mesure et
          notre priorité est de s’adapter à vos besoins.
        </p>
        <p>
          Bénéficiez d’une expertise gratuite et profitez d’une offre unique sur
          le marché : nous vous offrons les diagnostics de performance
          énergétique si vous nous choisissez en tant qu’interlocuteur unique !
        </p>
        <Link href="/vendre">
          <button>Vendre mon bien</button>
        </Link>
      </div>
    </Layout>
  );
}
