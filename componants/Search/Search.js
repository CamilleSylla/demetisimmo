import style from './search.module.scss'
import Link from 'next/link'

export default function Search ({button}) {


    const testSearchObject = {
        city : "Le Mans",
        chambre: 2
    }


    return (
        <div className={style.wrapper}>
            <div>
                <p>Nombre de pièce</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6+</option>
                </select>
            </div>
            <div>
                <div className={style.border}/>
                <p>Type de Bien</p>
                <select>
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>Terrain</option>
                </select>
            </div>
            <div>
            <div className={style.border}/>
                <p>Superficie minimum</p>
                <input type="number" min="1" placeholder="en m²"/>
            </div>
            <div>
            <div className={style.border}/>
                <p>Budget</p>
                <input type="number" min="1" placeholder="Change ce truc"/>

            </div>
            <div>
                <Link href={{ pathname: '/proprietes/', query: {filter : JSON.stringify(testSearchObject)} }}>
                <button>{button}</button>
                </Link>
            </div>

        </div>
    )
}