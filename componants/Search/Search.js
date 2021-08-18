import style from './search.module.scss'

export default function Search ({button}) {

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
                <button>{button}</button>
            </div>

        </div>
    )
}