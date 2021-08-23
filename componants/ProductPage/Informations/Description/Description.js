import style from './description.module.scss'
import agents from '../../../../Json/Team.json'

export default function Description ({product}) {

    const ContactAgent = () => {
        const {autor} = product
        const findAgent = agents.find(agent => agent.id == autor)
        return (
            
            <div className={style.form}>
                <div className={style.content_wrapper}>
                    <img src={findAgent.main_img}/>
                    <div>
                        <h3>{findAgent.prenom} {findAgent.nom}</h3>
                        <p>{findAgent.poste}</p>
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
                    <button>Contacter {findAgent.prenom}</button>
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.description}>
            <h1>Description du bien</h1>
            <p> {product.desc} </p>
            </div>
            <ContactAgent/>
        </section>
    )

}