import style from "./agent.module.scss";

export default function Agent({ agent }) {
  const Agent = () => {
    const current = agent.acf;
    return (
      <div className={style.wrapper}>
        <img className={style.profile_picture} src={current.vignette} />
        <article className={style.infos}>
          <div className={style.container}>
            <h1>{agent.title.rendered}</h1>
            <h2>{current.poste}</h2>
            <div
              className={style.bio}
              dangerouslySetInnerHTML={{ __html: current.bio }}
            />
            <div className={style.social}>
              <img src="/icon/blue/social/linkedin.svg" />
              <p onClick={() => window.open(current.lkd)}>
                Profil de {agent.title.rendered} ⬈
              </p>
            </div>
            <div className={style.social}>
              <img src="/icon/blue/mail.svg" />
              <p onClick={() => window.open(`mailto:${current.email}`)}>
                Contacter {agent.title.rendered} ⬈
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  };
  return <>{agent ? <Agent /> : null}</>;
}
