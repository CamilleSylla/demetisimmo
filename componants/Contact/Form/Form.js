import { useState } from 'react'
import style from './form.module.scss'


export default function Form () {
    const [mail, setMail] = useState()
    const subject = "Votre sujet"

    return (
        <form className={style.wrapper}>
            <p className={style.title}>Contactez-nous ou l'un de nos agent !</p>
            <input type="text" placeholder="Votre nom et prénom"/>
            <input type="email" placeholder="Votre adresse email"/>
            <select>
                <option>Agence</option>
            </select>
            <input type="text" placeholder={subject}/>
            <textarea placeholder="Votre message"/>
            <div>
            <input type="checkbox"/>
            <p> En cochant cette case vous accepter blablabla</p>
            </div>
            <button>Envoyer</button>
        </form>

    )
}