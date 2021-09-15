import style from './description.module.scss'
import agents from '../../../../Json/Team.json'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Description ({product}) {

    const [agent, setAgent] = useState(false)

    const ID = product.acf.vendeur[0].ID
    const ContactAgent = () => {

            const {img, mail, poste, name} = agent
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
                            <input type="text" placeholder="Votre nom"/>
                            <input type="text" placeholder="Adresse e-mail"/>
                            <input type="text" placeholder="N° de téléphone"/>
                            <textarea type="text" placeholder="Message"/>
                        </form>
                    </div>
                    <div className={style.content_wrapper}>
                        <input type="checkbox"/>
                        <span> encochant cette case, j'accepte blablablabla</span>
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