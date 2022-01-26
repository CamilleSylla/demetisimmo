import { numberWithSpaces } from "../../../helper";
import style from "./header.module.scss";

export default function Header({ product }) {
  return (
    <section className={style.wrapper}>
      <div className={style.price}>
          <p>{numberWithSpaces(product.acf.prix.toLocaleString())}€</p>
          <p className={style.ref}>Référence <span>Demetis Immo</span> : {product.acf.ref}</p>
      </div>
      <h1>{product.title.rendered}</h1>
      <div className={style.adresse}>
        <img src="/icon/blue/location.svg" />
        <p>{product.acf.ville}, {product.acf.cp}</p>
      </div>
      <div className={style.informations}>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/bed.svg" />
          <p>
            {product.acf.chambre} chambre{product.acf.chambre > 1 ? "s" : null}
          </p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/area.svg" />
          <p>{product.acf.habitable}m²</p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/piece.svg" />
          <p>
            {product.acf.piece} piece{product.acf.piece > 1 ? "s" : null}
          </p>
        </div>
        <div className={style.icon_wrapper}>
          <img src="/icon/blue/garage.svg" />
          <p>
            {product.acf.garage ? product.acf.garage : 0} garage{product.acf.garage > 1 ? "s" : null}
          </p>
        </div>
      </div>
      
    </section>
  );
}
