import style from "./form.module.scss";

export default function Form() {
  return (
    <section className={style.wrapper}>
        <div className={style.content}>
            <h1>Vendre avec DemetisImmo</h1>
            <p>Contactez nous afin de d'optimiser la vente de votre bien</p>
            <button>Vendre mon bien</button>
        </div>
    </section>
  );
}
