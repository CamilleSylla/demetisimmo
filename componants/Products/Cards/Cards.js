import style from './cards.module.scss'

export default function Cards ({data}) {
    return (
        <article className={style.wrapper}>
            <img className={style.main_img} src={data.main_img}/>
            <span className={style.price}>{data.prix}€</span>
            <h1>{data.title}.</h1>
            <div className={style.infos_icon}>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/area.svg"/>
                    <p>{data.surface}m²</p>
                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/piece.svg"/>
                    <p>{data.piece} pièces</p>

                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/bed.svg"/>
                    <p>{data.chambres} chambre{data.chambres > 1 ? "s" : null}</p>
                </div>
            </div>
        </article>
    )
}