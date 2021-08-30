import { useEffect, useRef, useState } from 'react'
import Filters from '../Filters/Filters'
import style from './coolform.module.scss'

export default function CoolForm ({hide, hideStatus}) {
    const [active, setActive ] = useState(false) 
    const [filter, setFilter] = useState(false)
    const form = useRef()
    const hidebtn = useRef()
    const hideBTN = useRef()

    const onSubmit = () => {
        setActive(false)
    }

    useEffect(() => {
        const formStyle = form.current.style
        const hideBTNcursor = hidebtn.current.style
        const HideBTN = hideBTN.current.style
        if (active) {
            formStyle.transform = "translate3d(0,0,0 )"
        } else {
            formStyle.transform = "translate3d(0,100%,0 )"
        }

        if (hideStatus) {
            hideBTNcursor.left = "60%"
            hideBTNcursor.background = "#1c3661"
            HideBTN.background = "#F2F2F2"
        } else {
            hideBTNcursor.left = "5%"
            hideBTNcursor.background = "#F2F2F2"
            HideBTN.background = "#1c3661"
        }
       

    }, [hideStatus])

    const HideMap = ({status}) => {

        return (
            <div className={style.hide}>
                <p>Cacher la carte</p>
                <div ref={hideBTN} onClick={() => hide(!hideStatus)}>
                    <div ref={hidebtn} className={style.pointer} />
                </div>
            </div>
        )
    }

    return (
        <>
        <Filters toogle={filter}/>
        <section className={style.actions}>

        <div className={style.wrap}>

        <div className={style.form} onClick={() => setActive(!active)}>Rechercher</div>
        <div className={style.filters} onClick={() => setFilter(!filter)}>Filtrer</div>
        <HideMap status={true}/>
        </div>
        </section>
        <div ref={form} className={style.wrapper}>
            <h1>Trouver le bien qui me correspond</h1>
            <p>
                Je suis a la recherche d'un{"(e)"} {" "}
                <select>
                <option></option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Terrain</option>
                </select> 
                {" "}d'une superficie miniumum de <input type="number" min="0"/>m² ,
            </p>
            <p>
                Ma futur propriété possèdera <input type="number" min="0"/> pièce{"(s)"} minimum, avec si possible <input type="number" min="0"/> chambre{"(s)"},
            </p>
            <p>
                J'aimerais pourvoir trouver cette futur acquisition vers 
                <select>
                    <option></option>
                    <option>Le Mans</option>
                    <option>Changer</option>
                    <option>La Chapelle St Haubin</option>
                </select>
                , pour un budget minimum de <input type="number" min="0"/>€
            </p>
            <button onClick={onSubmit}>Soumettre</button>
        </div>
        </>
    )
}