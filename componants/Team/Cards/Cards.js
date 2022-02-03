import style from './card.module.scss'
import Link from 'next/link'
import { useContext } from 'react';
import { TeamContext } from '../../../context/TeamContext';
import { useRouter } from 'next/dist/client/router';

export default function Cards ({team, index}) {
    const [agent, setAgent] = useContext(TeamContext);
    const route = useRouter()

    const Social = ({url}) => {
        return (
            <div className={style.social}>
                     <img onClick={() => window.open(url)} src="/icon/blue/social/linkedin.svg" />
            </div>
        )
    }
    const onClickAgent = () => {
        setAgent(team)
        route.push('/equipe')
    }

    return (
        <article onClick={onClickAgent} className={style.wrapper}>
            <div className={style.border}>
                <Social url={team.acf.lkd}/>
                </div>
                <img className={style.profile_img} src={team.acf.vignette}/>
                <div className={style.id}>
                    <h1>{team.title.rendered}</h1>
                    <p>{team.acf.poste}</p>
                </div>
        </article>
    )
}