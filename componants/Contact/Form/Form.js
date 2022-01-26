import { useState } from 'react'
import style from './form.module.scss'


export default function Form () {
    const [mail, setMail] = useState()

    return (
        <form className={style.wrapper}>
            <p className={style.title}>Contactez-nous ou l’un de nos agents !</p>
            <input type="text" placeholder="Nom et prénom"/>
            <input type="email" placeholder="Adresse email"/>
            <input type="text" placeholder="Objet"/>
            <textarea placeholder="Message"/>
            <div>
            <input type="checkbox"/>
            <p> En cochant cette case vous accepter blablabla</p>
            </div>
            <button>Envoyer</button>
        </form>

    )
}