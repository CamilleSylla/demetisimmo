import style from './gallery.module.scss'

export default function Gallery ({product, gallery, setImgUrl}) {

    const imgClick = (event) => {
        setImgUrl({...gallery, target: event.target.currentSrc, active: true})
    }

    return (
        <section className={style.wrapper}>
            <img onClick={imgClick} src={product.acf.main_img} className={style.main_img}/>
            <div className={style.other_img}>
                {product.acf_photo_gallery.map((url, i) => {
                    if (i <= 3) {
                        return (
                            <div>
                                <img onClick={imgClick} src={url.full_image_url} />
                            </div>
                        )
                    }
                })}
                <div className={style.all_img}>
                    {product.acf_photo_gallery.length - 5}+
                </div>
            </div>
        </section>
    )
}