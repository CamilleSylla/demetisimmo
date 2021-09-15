import style from './backgroundlayer.module.scss'
import team from '../../../Json/Team.json'
import { useContext, useState } from 'react'
import { TeamContext } from '../../../context/TeamContext'

export default function BackgroundLayer () {
    const [active, setActive] = useContext(TeamContext)

    const activeMember = team[active]

    const DescWindow = () => {
        return (
            <div className={style.window_wrapper}>
                <article className={style.window}>
                    <div className={style.profile}>
                        <img src={activeMember.main_img}/>
                        <div className={style.id}>
                            <h1>{activeMember.prenom + " " + activeMember.nom}</h1>
                            <p>{activeMember.poste}</p>
                            {/* <div className={style.social}>a</div> */}
                        </div>
                    </div>
                    <p className={style.desc}>
                        {activeMember.desc}
                    </p>
                </article>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.content}>
            <h1>{activeMember.prenom + " "+activeMember.nom}</h1>
            <p>{activeMember.poste}</p>
            </div>
            <img src={activeMember.croped_img} />
            <DescWindow/>
        </section>
    )
}