import { useEffect } from 'react'
import Spacing from '../Spacing/spacing'
import style from './mention.module.scss'

export default function Mention ({page}) {

    const title = page[0].title.rendered
    const content = page[0].content.rendered
    // const {}
    useEffect(() => {
        const downloadBtn = document.getElementsByClassName('wp-block-file__button')[0].style
        if (downloadBtn) {
            downloadBtn.padding = "2vh 2vw 2vh 2vw"
            downloadBtn.display = "block"
            downloadBtn.background = "#1c3661"
            downloadBtn.textAlign = "center"
            downloadBtn.color = "#F2F2F2"
            downloadBtn.fontWeight = "bold"
        }
        
    }, [])

    return (
        <>
        <Spacing value="10vh"/>
        <div className={style.wrapper}>
        <h1>
            {title}
        </h1>
        <div className={style.content} dangerouslySetInnerHTML={{__html: content}}/>
        </div>
        </>
    )
}