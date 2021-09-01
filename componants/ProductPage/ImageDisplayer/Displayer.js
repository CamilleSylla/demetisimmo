import { useEffect, useRef } from 'react'
import style from './displayer.module.scss'
import Picker from './Picker/Picker'

export default function Displayer ({product, gallery, setImgUrl}) {

    const wrapper = useRef()
    

    useEffect(() => {
        if (gallery.active) {
            wrapper.current.style.top = 0
        } else {
            wrapper.current.style.top = "-100%"
            
        }
    },[gallery.active])
    return (
        <section ref={wrapper} className={style.wrapper}>
            <button onClick={() => setImgUrl({...gallery, active: false})} className={style.close}>Fermer</button>
            <Picker gallery={gallery} setImgUrl={setImgUrl} images={gallery.all}/>
            <img src={gallery.target} className={style.main}/>
            <img src="/Logo/Logo.svg" className={style.logo}/>
        </section>
    )
}