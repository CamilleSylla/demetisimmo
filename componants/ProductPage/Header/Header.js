import style from "./header.module.scss";

export default function Header({ product }) {
  return (
    <section className={style.wrapper}>
      <h1>{product.title.rendered}</h1>
      <div className={style.adresse}>
        <img src="/icon/blue/location.svg" />
        <p>{product.acf.ville}, {product.acf.cp}</p>
      </div>
      {/* <div className={style.informations}>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/bed.svg" />
          <p>
            {product.chambres} chambre{product.chambres > 1 ? "s" : null}
          </p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/area.svg" />
          <p>{product.surface}m²</p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/piece.svg" />
          <p>
            {product.piece} piece{product.piece > 1 ? "s" : null}
          </p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/garage.svg" />
          <p>
            {product.garage} garage{product.garage > 1 ? "s" : null}
          </p>
        </div>
      </div> */}
      <div className={style.price}>
          <p>{product.acf.prix.toLocaleString()}€</p>
          <p className={style.ref}>Référence <span>Demetis Immo</span> : {product.acf.ref}</p>
      </div>
    </section>
  );
}
