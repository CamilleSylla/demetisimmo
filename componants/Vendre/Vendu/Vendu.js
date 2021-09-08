import style from './vendu.module.scss'
import houses from '../../../Json/House.json'
export default function Vendu () {

    return (
        <section className={style.wrapper}>
            <div className={style.illustration}>
                <img src="/img/conseiller.png"/>

            </div>
            <article className={style.content}>
            <h1>
          Vous <span>accompagnez</span> dans la <span>vente</span> de votre bien
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet nisi vestibulum, efficitur urna in, volutpat libero. In justo
            lorem, sagittis et ex lobortis, gravida molestie lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
            amet nisi vestibulum, efficitur urna in, volutpat libero.
          </p>
        <button>Vendre mon bien</button>
            </article>
        </section>
    )
}