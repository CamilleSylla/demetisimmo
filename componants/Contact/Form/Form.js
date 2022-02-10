import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import style from './form.module.scss'


export default function Form () {
    const [mail, setMail] = useState({form: "contact",})
    const router = useRouter()

    const onSubmit = async () => {
        if (
            mail.nom &&
            mail.email &&
            mail.objet &&
            mail.msg 
        ) {
            const sendMail = await axios
          .post(window.location.origin + "/api/contact", mail)
          .then((res) => {
            if (res.status === 200) {
              alert("Votre mail a bien été envoyé, nous vous répondrons dans le plus brefs delais.\n Vous allez être rediriger vers nos biens ! \n Merci")
              router.push("/proprietes")
            } else {
                alert("Une erreur c'est produite, merci de bien vouloir reesayer ulterieurement")
            }
          });
        } else {
            alert("Assurez-vous de bien avoir remplis tout les éléments du formulaire et d'avoir cochez la case nous permettant de vous recontacter")
        }
    }
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Contactez-nous ou l’un de nos agents !</p>
            <input type="text" onChange={e => setMail({...mail, nom : e.target.value})} placeholder="Nom et prénom"/>
            <input type="email" onChange={e => setMail({...mail, email : e.target.value})} placeholder="Adresse email"/>
            <input type="text" onChange={e => setMail({...mail, objet : e.target.value})} placeholder="Objet"/>
            <textarea onChange={e => setMail({...mail, msg : e.target.value})} placeholder="Message"/>
            <div>
            <p>En cliquant sur "ENVOYER", je valide que mes données puissent être utilisées dans le but d'être recontacté{"(e)"} à des fins commerciales par Demetis Immo.</p>
            </div>
            <button onClick={() => onSubmit()}>Envoyer</button>
        </div>

    )
}