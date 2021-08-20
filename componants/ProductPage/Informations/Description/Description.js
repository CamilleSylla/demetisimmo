import style from './description.module.scss'

export default function Description ({product}) {

    return (
        <section className={style.wrapper}>
            <h1>Description du bien</h1>
            <p> {product.desc} </p>
        </section>
    )

}