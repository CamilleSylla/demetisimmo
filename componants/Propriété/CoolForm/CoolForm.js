import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Filters from '../Filters/Filters'
import style from './coolform.module.scss'

export default function CoolForm ({hide, hideStatus}) {
    const [active, setActive ] = useState(true) 
    const [filter, setFilter] = useState(false)
    const [formContent, setFormContent] = useState({

    })
    const form = useRef()
    const hidebtn = useRef()
    const hideBTN = useRef()

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

    async function onChange (key, value) {

        setFormContent({...formContent, [key]: value})
        console.log(formContent);
    }

    async function Submit () {

        const houses = await axios.get(`${process.env.NEXT_PUBLIC_API}/biens`).then(res => res.data)
        houses.forEach( o => {
            const isMatch = Object.entries(o.acf).every(b => formContent[b] === o[b])
            console.log(isMatch);
        })
        // const filteredHouses = houses.filter((el, i )=>
        //     {
        //         const {acf} = el
                
                // console.log(isMatch);
            // return el.acf.piece >= formContent.piece &&
            //     el.acf.type == formContent.type
        // })
        // console.log(filteredHouses);
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
                <select onChange={e => onChange("type", e.target.value)}>
                <option></option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Terrain</option>
                <option>Autre</option>
                </select> 
                {" "}d'une superficie miniumum de <input onChange={e => onChange("habitable", e.target.value)} type="number" min="0"/>m² ,
            </p>
            <p>
                Ma futur propriété possèdera <input onChange={e => onChange("piece", e.target.value)} type="number" min="0"/> pièce{"(s)"} minimum, avec si possible <input type="number" min="0"/> chambre{"(s)"},
            </p>
            <p>
                J'aimerais pourvoir trouver cette futur acquisition vers 
                <select onChange={e => onChange("ville", e.target.value)}>
                    <option></option>
                    <option>Le Mans</option>
                    <option>Changer</option>
                    <option>La Chapelle St Haubin</option>
                </select>
                , pour un budget maximum de <input onChange={e => onChange("prix", e.target.value)} type="number" min="0"/>€
            </p>
            <button onClick={() => Submit()}>Soumettre</button>
        </div>
        </>
    )
}