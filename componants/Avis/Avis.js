import Layout from "../Layout/Layout";
import style from "./avis.module.scss";

export default function Avis({avis}) {

  

    const CardAvis = ({avis}) => {
      const Stars = () => {
        const result = []
        for (let i = 0; i < Number(avis.acf.note); i++) {
          result.push(i)
        }
        return (
          <div className={style.stars}>
            {result.map((el, i) => {
              return <img src="/icon/etoile.svg"/>
            })}
          </div>
        )
      }
      console.log(avis.acf.note);
        return (
            <div className={style.card_wrapper}>
            <article className={style.card}>
                        <div className={style.text_content}>
                          <Stars/>
                            <p dangerouslySetInnerHTML={{__html: avis.acf.text}}/>
                            <div>
                                <h3>{avis.acf.auteur}</h3>
                                <span>{avis.acf.info}</span>
                            </div>
                        </div>
                </article>
                </div>
        )
    }
  return (
    <Layout>
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <span>Votre satisfaction</span>
          <h1>
            Ce que nos clients pensent de nous{" "}
          </h1>
          <div className={style.slide_wrapper}>
            
                {avis.map((el, i) => {
                    return (
                        <CardAvis avis={el}/>
                    )
                })}
          </div>
        </div>
      </div>
      <div className={style.illustration}>
          <div className={style.background}/>
          <img className={style.circle} src="/illustrations/circle.svg"/>
          <img className={style.client} src="/img/client.png"/>
      </div>
    </Layout>
  );
}
