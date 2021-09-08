import Energie from './Energie/Energie'
import style from './enwrap.module.scss'
import Ges from './GES/Ges'

export default function EnWrap ({ges, energie}) {

    return (
        <section className={style.wrapper}>
            <h1 className={style.section_title}>Les performances énergétiques</h1>
            <Energie  ges={energie}/>
            <Ges ges={ges}/>
        </section>
    )
}