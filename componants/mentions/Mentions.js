import Spacing from '../Spacing/spacing'
import style from './mention.module.scss'

export default function Mention ({page}) {


    console.log(page[0])

    const title = page[0].title.rendered
    const content = page[0].content.rendered
    // const {}

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