import axios from "axios";
import { useEffect, useState } from "react";
import style from "./description.module.scss";

export default function Description({ product }) {
  const [agent, setAgent] = useState(false);
  const [contact, setContact] = useState();
  const [agentMail, setAgentMail] = useState();
  const [mailIsSend, setMailIsSend] = useState(null);

  const ID = product.acf.vendeur[0].ID;
  const ContactAgent = () => {
    const { img, mail, poste, name } = agent;
    let formObject = {
      form: "Bien",
      agent: mail,
      reference: product.acf.ref,
      bien_name: product.title.rendered,
      bien_id: product.id,
      nom: {
        value: "",
        isComplete: false,
      },
      email: {
        value: "",
        isComplete: false,
      },
      phone: {
        value: "",
        isComplete: false,
      },
      msg: {
        value: "",
        isComplete: false,
      }
    };
    const onChangeForm = (key, value) => {
      formObject = { ...formObject, [key]: { value: value, isComplete: true } };
    };
    const onSubmit = async () => {
      if (
        formObject.nom.isComplete === true &&
        formObject.email.isComplete === true &&
        formObject.phone.isComplete === true &&
        formObject.msg.isComplete === true
      ) {
        const sendMail = await axios
          .post(window.location.origin + "/api/contact", formObject)
          .then((res) => {
            if (res.status === 200) {
              setMailIsSend({ status: 200, msg: res.data });
              console.log(res.data);
            }
          });
      } else {
          alert(
            "Vous devez remplir toute les informations du formulaire, merci."
          );
      }
    };
    const ContactForm = () => {
      return (
        <div className={style.form}>
          <div className={style.content_wrapper}>
            <img src={img} />
            <div>
              <h3>{name}</h3>
              <p>{poste}</p>
            </div>
          </div>
          <div className={style.content_wrapper}>
            <form>
              <input
                type="text"
                placeholder="Votre nom*"
                onChange={(e) => onChangeForm("nom", e.target.value)}
              />
              <input
                type="text"
                placeholder="Adresse e-mail*"
                onChange={(e) => onChangeForm("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="N° de téléphone*"
                onChange={(e) => onChangeForm("phone", e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Message*"
                onChange={(e) => onChangeForm("msg", e.target.value)}
              />
            </form>
          </div>
          <p style={{fontSize: "1.25vh", textAlign: "center", width: "80%", margin: "0 auto"}}>En cliquant sur "Contacter {name}", je valide que mes données puissent être utilisées dans le but d'être recontacté à des fins commerciales par Demetis Immo.</p>
          <div className={style.content_wrapper}>
            <button onClick={() => onSubmit()}>Contacter {name}</button>
          </div>
        </div>
      );
    };

    const SendedMessage = () => {
      const styleGreen = {
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      };
      const styleRed = {
        background: "red",
      };

      return (
        <article
          style={mailIsSend.status === 200 ? styleGreen : styleRed}
          className={style.form}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: "3rem",
              opacity: ".5",
              color: "#F2F2F2",
            }}
          >
            {mailIsSend.status}
          </span>
          <div
            style={{
              position: "initial",
              margin: "5vh 0 5vh 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20vh",
              height: "20vh",
              borderRadius: "50%",
              border: "4px solid #F2F2F2",
            }}
          >
            <img style={{ 
                position: "initial",
                 width: "50%",
                 filter: "invert(100%) sepia(50%) saturate(110%) hue-rotate(217deg) brightness(115%) contrast(90%)"
                }} src={mailIsSend.status === 200 ? "/icon/thumbup.svg" : "/icon/thumbdown.svg"} />
          </div>
          <p
            style={{
              width: "80%",
              textAlign: "center",
              fontWeight: 700,
              color: "#F2F2F2",
            }}
          >
            {mailIsSend.msg}
          </p>
        </article>
      );
    };
    return <>{mailIsSend ? <SendedMessage /> : <ContactForm />}</>;
  };

  useEffect(() => {
    console.log(window.location.origin);
    const agent = axios
      .get(`${process.env.NEXT_PUBLIC_API}/agent/${ID}`)
      .then((res) => {
        setAgent({
          img: res.data.acf.vignette,
          name: res.data.title.rendered,
          poste: res.data.acf.poste,
          mail: res.data.acf.email,
        });
      });
  }, []);

  return (
    <section className={style.wrapper}>
      <div className={style.description}>
        <h1>Description du bien</h1>
        <div dangerouslySetInnerHTML={{ __html: product.acf.desc }} />
      </div>
      {agent ? <ContactAgent /> : null}
    </section>
  );
}
