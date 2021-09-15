import style from './selector.module.scss'
import team from '../../../Json/Team.json'
import { TeamContext } from '../../../context/TeamContext'
import { useContext } from 'react'

export default function Selector () {
    const [active, setActive] = useContext(TeamContext)

    const Card = ({member, index}) => {

        return (
            <div onClick={() => setActive(index)} className={style.cards}>
                <img src={member.main_img}/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            {/* <div className={style.bar}/> */}
            <div className={style.card_wrap}>
            {team.map((el, i) => {
                return <Card member={el} index={i}/>
            })}
            </div>
            
        </section>
    )
}