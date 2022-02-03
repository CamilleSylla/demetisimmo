import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { VendreContext } from "../../../context/vendreContext";
import style from "./form.module.scss";

export default function Form() {
  const [open, setOpen] = useContext(VendreContext)
  const router = useRouter()
  let form = {form: "vendre"}
  const onFormChange = (key, value) => {
    form[key] = value
  }

  const onFormSubmit = async e => {
    e.preventDefault()
    if (
      form.rue &&
      form.num &&
      form.ville &&
      form.cp &&
      form.type &&
      form.nom &&
      form.prenom &&
      form.tel &&
      form.email 
    ) {
      const sendMail = await axios.post("/api/contact", form)
      .then((res) => {
        if (res.status === 200) {
          alert("Votre mail a bien été envoyé, nous vous répondrons dans le plus brefs delais.\n Vous allez être rediriger vers nos biens ! \n Merci")
          setOpen(!open)
        } else {
            alert("Une erreur c'est produite, merci de bien vouloir reesayer ulterieurement")
        }
      })
    } else {
      alert("Veuillez bien remplir tous les champs du formulaire afin de proceder à l'envoie de la demande")
    }
  }

  const FormVendre = () => {
    
    return (
      <div className={style.formWrapper}>
          <span className={style.close} onClick={() => setOpen(!open)}>Fermer</span>
        <form onSubmit={onFormSubmit}>
            {/* <img src='/Logo/Logo.svg'/> */}
            <h3>Informations personnelles</h3>
            <div className={style.inputBoxes}>
            <input type='text' placeholder="Nom" onChange={e => onFormChange("nom", e.target.value)}/>
            <input type='text' placeholder="Prénom" onChange={e => onFormChange("prenom", e.target.value)}/>
            </div>
            <div className={style.inputBoxes}>
            <input type='tel' placeholder="N° de téléphone" onChange={e => onFormChange("tel", e.target.value)}/>
            <input type='email' placeholder="Adresse Email" onChange={e => onFormChange("email", e.target.value)}/>
            </div>
            <h3>Localisation de votre bien</h3>
            <div className={style.inputBoxes}>
            <input type='text' placeholder="Rue + (Bis-Ter...)" onChange={e => onFormChange("rue", e.target.value)}/>
            <input type='number' placeholder="N°" onChange={e => onFormChange("num", e.target.value)}/>
            </div>
            <div className={style.inputBoxes}>
            <input type='text' placeholder="Ville" onChange={e => onFormChange("ville", e.target.value)}/>
            <input type='text' placeholder="Code Postal" onChange={e => onFormChange("cp", e.target.value)}/>
            </div>
            <select onChange={e => onFormChange("type", e.target.value)}>
              <option>Type de bien</option>
              <option>Maison</option>
              <option>Appartement</option>
              <option>Garage</option>
              <option>Terrain</option>
              <option>Autre</option>
            </select>
            <p>En cliquant sur "VENDRE MON BIEN", je valide que mes données puissent être utilisé dans le but d'être recontacté à des fins commerciales par Demetis Immo</p>
            <button>Vendre mon bien</button>
        </form>
      </div>
    )
  }
  return (
    <section className={style.wrapper}>
      {open === true ? <FormVendre/> : null}
        <div className={style.content}>
            <h1>Vendre avec DemetisImmo</h1>
            <p>Contactez nous afin d'optimiser la vente de votre bien</p>
            <button onClick={() => setOpen(!open)}>Vendre mon bien</button>
        </div>
    </section>
  );
}
