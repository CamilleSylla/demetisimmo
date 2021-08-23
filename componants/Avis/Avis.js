import style from "./avis.module.scss";

export default function Avis({avis}) {
    const last = avis[0]

    const CardAvis = ({avis}) => {

        return (
            <div className={style.card_wrapper}>
            <article className={style.card}>
                        <img src={avis.profile}/>
                        <div className={style.text_content}>
                            <p>{avis.avis}</p>
                            <div>
                                <h3>{avis.auteur}</h3>
                                <span>{avis.poste_auteur}</span>
                            </div>
                        </div>
                </article>
                </div>
        )
    }
  return (
    <section className={style.wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <span>Votre satisfaction</span>
          <h1>
            Ce que <span>nos clients</span> pensent de nous{" "}
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
    </section>
  );
}
