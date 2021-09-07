import style from './gallery.module.scss'

export default function Gallery ({product, gallery, setImgUrl}) {

    const imgClick = (event) => {
        setImgUrl({...gallery, target: event.target.currentSrc, active: true})
    }

    return (
        <section className={style.wrapper}>
            <img onClick={imgClick} src={product.main_img} className={style.main_img}/>
            <div className={style.other_img}>
                {product.gallery.map((url, i) => {
                    if (i <= 3) {
                        return (
                            <>
                            <img onClick={imgClick} src={url} />
                            </>
                        )
                    }
                })}
                <div className={style.all_img}>
                    {product.gallery.length - 5}+
                </div>
            </div>
        </section>
    )
}