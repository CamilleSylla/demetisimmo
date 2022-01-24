import style from './description.module.scss'
import agents from '../../../../Json/Team.json'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Description ({product}) {

    const [agent, setAgent] = useState(false)
    const  [contact, setContact] = useState()
    const [agentMail, setAgentMail] = useState()

    const ID = product.acf.vendeur[0].ID
    const ContactAgent = () => {
            let formObject = {
                nom : {
                    value : "",
                    isComplete: false
                },
                email : {
                    value : "",
                    isComplete: false
                },
                phone : {
                    value : "",
                    isComplete: false
                },
                msg : {
                    value : "",
                    isComplete: false
                },
                rgpd : false
            }
            const onChangeForm = (key, value) => {
                formObject = {...formObject, [key] : {value : value, isComplete : true} }
                console.log(formObject);
            }

            const {img, mail, poste, name} = agent
            setAgentMail(mail)
            return (
            
                <div className={style.form}>
                    <div className={style.content_wrapper}>
                        <img src={img}/>
                        <div>
                            <h3>{name}</h3>
                            <p>{poste}</p>
                        </div>
                    </div>
                    <div className={style.content_wrapper}>
                        <form>
                            <input type="text" placeholder="Votre nom*" onChange={e => onChangeForm("nom", e.target.value)}/>
                            <input type="text" placeholder="Adresse e-mail*" onChange={e => onChangeForm("email", e.target.value)}/>
                            <input type="text" placeholder="N° de téléphone*" onChange={e => onChangeForm("phone", e.target.value)}/>
                            <textarea type="text" placeholder="Message*" onChange={e => onChangeForm("msg", e.target.value)}/>
                        </form>
                    </div>
                    <div className={style.content_wrapper}>
                        <input type="checkbox" onChange={() => formObject.rgpd = true}/>
                        <span> en cochant cette case, j'accepte que mes informations soient conservées afin d'etre recontacter dans une demarche commerciale.</span>
                    </div>

                    <div className={style.content_wrapper}>
                        <button>Contacter {name}</button>
                    </div>
                </div>
            )
        
    }


    useEffect(() => {
        const agent = axios.get(`${process.env.NEXT_PUBLIC_API}/agent/${ID}`)
        .then(res => {
            setAgent({
                img: res.data.acf.vignette,
                name: res.data.title.rendered,
                poste: res.data.acf.poste,
                mail: res.data.acf.email
            })
        })
    }, [])

    
    return (
        <section className={style.wrapper}>
            <div className={style.description}>
            <h1>Description du bien</h1>
            <div dangerouslySetInnerHTML={{__html: product.acf.desc}}/>
            </div>
            {agent ? <ContactAgent /> : null}
            
        </section>
    )

}