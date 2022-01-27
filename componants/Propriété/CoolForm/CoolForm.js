import { useEffect, useRef, useState } from 'react'
import Search from '../../Search/Search'
import Filters from '../Filters/Filters'
import style from './coolform.module.scss'

export default function CoolForm ({hide, hideStatus, searchSelect}) {
    const [active, setActive ] = useState(false) 
    const form = useRef()

    const onSubmit = () => {
        setActive(false)
    }

    useEffect(() => {
        const formStyle = form.current.style
        if (active) {
            formStyle.transform = "translate3d(0,0,0 )"
        } else {
            formStyle.transform = "translate3d(0,100%,0 )"
        }

    }, [active || hideStatus])

    return (
        <>
        <div className={style.search_zone}>
        <Search searchSelect={searchSelect} button="Rechercher" />
        </div>
        <section className={style.actions}>
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