import style from './search.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export default function Search ({button}) {

const [search, setSearch] = useState({})
    const testSearchObject = {
        ville : "Le Mans",
        piece: 2,
        type : "Maison"
    }

    const onSelect = (key, value) => {
        setSearch({...search, [key] : value})
        console.log(key, value, search);
    }


    return (
        <div className={style.wrapper}>
            <div>
                <p>Nombre de pièces</p>
                <select onChange={e => onSelect("piece", e.target.value)}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            <div>
                <div className={style.border}/>
                <p>Type de Bien</p>
                <select onChange={e => onSelect("type", e.target.value)}>
                    <option></option>
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>Terrain</option>
                    <option>Local Commercial</option>
                </select>
            </div>
            <div>
                <div className={style.border}/>
                <p>Ville</p>
                <select onChange={e => onSelect("ville", e.target.value)}>
                    <option></option>
                    <option>Le Mans</option>
                    <option>Changé</option>
                </select>
            </div>
            <div>
                <div className={style.border}/>
                <Link href={{ pathname: '/proprietes/', query: {filter : JSON.stringify(search)} }}>
                <button>{button}</button>
                </Link>
            </div>

        </div>
    )
}