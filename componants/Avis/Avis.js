import Layout from "../Layout/Layout";
import style from "./avis.module.scss";

export default function Avis({avis}) {
    const last = avis[0]

    const CardAvis = ({avis}) => {
      console.log(avis);
        return (
            <div className={style.card_wrapper}>
            <article className={style.card}>
                        <img src={avis.acf.photo === false ? "/icon/user.svg" : avis.acf.photo}/>
                        <div className={style.text_content}>
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
