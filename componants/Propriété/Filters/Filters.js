import { useEffect, useRef } from 'react'
import style from './filters.module.scss'

export default function Filters ({ toogle}) {

    const filter = useRef()

    useEffect(() => {
        const filterStyle = filter.current.style
         if (toogle) {
            filterStyle.transform = "translate3d(0,0,0 )"
        } else {
            filterStyle.transform = "translate3d(-100%,0,0 )"
        }
    }, [toogle])
    return (
        <div ref={filter} className={style.wrapper}>

        </div>
    )
}