import style from './Picker.module.scss'

export default function Picker ({images, gallery, setImgUrl}) {


    const imgClick = (event) => {
        setImgUrl({...gallery, target: event.target.currentSrc})
    }

    return (
        <div className={style.wrapper}>
            {images.map((el, i) => {
                return (
                    <img onClick={imgClick} src={el.full_image_url} />
                )
            })}
        </div>
    )
}