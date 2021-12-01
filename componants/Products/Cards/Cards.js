import Link from 'next/link'
import style from './cards.module.scss'
import Team from '../../../Json/Team.json'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Cards ({data}) {

    const [ agent, setAgent] = useState(false)
    console.log("Houses => ",data);

    const disponible = {
        background : "#1c3661",
    }

    const vendu = {
        background : "red",
    }

    const Disponibilite = () => {

        return (
            <div className={style.disponibility} style={data.acf.dispo == "Vrai" ? disponible : vendu}>
                <p style={{color: "white"}}>{data.acf.dispo == "Vrai" ? "Disponible" : "Vendu"}</p>
            </div>
        )
    }

    const Agent = () => {
        return (
            <img src={agent} className={style.agent}/>
        )
    }

    useEffect(() => {
        const agent = axios.get(`${process.env.NEXT_PUBLIC_API}/agent/${data.acf.vendeur[0].ID}`)
            .then(res => {
                setAgent(res.data.acf.vignette)
            })
    }, [])


    return (
        <Link href={`/bien/${data.id}`}>
        <article className={style.wrapper}>
                <Agent/>
            <img className={style.main_img} src={data.acf.main_img}/>
            <span className={style.price}>{data.acf.prix.toLocaleString()}€</span>
            <h1>{data.title.rendered}.</h1>
            <div className={style.infos_icon}>
            <div className={style.icon_wrapper}>
                    <img src="/icon/blue/area.svg"/>
                    <p>{data.acf.habitable}m²</p>
                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/piece.svg"/>
                    <p>{data.acf.piece} pcs</p>

                </div>
                <div className={style.icon_wrapper}>
                    <img src="/icon/blue/bed.svg"/>
                    <p>{data.acf.chambre} chr{data.chambres > 1 ? "s" : null}</p>
                </div>
                <Disponibilite/>
            </div>
        </article>
        </Link>
    )
}