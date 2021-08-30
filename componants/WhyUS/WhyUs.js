import Circle from "./Circle/Circle";
import style from "./whyus.module.scss";

export default function WhyUs() {

  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        <div>
          <h1>Pourquoi nous choisir ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisi
            vestibulum,
          </p>
          <button>Nos services</button>
        </div>
      </article>
        <Circle />
    </section>
  );
}
