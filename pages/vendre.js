import Fonctionnement from "../componants/Fonctionnement/Fonctionnement";
import Header from "../componants/Header/Header";
import Spacing from "../componants/Spacing/spacing";
import Form from "../componants/Vendre/Form/Form";
import Selled from "../componants/Vendre/Selled/Selled";
import Accompagnement from "../componants/Vendre/Vendu/Vendu";
export default function Vendre () {

    return (
        <div>
            <Spacing value="10vh" />
            <Header
        pageTitle="Vendre mon bien avec Demetis Immo"
        desc="Vous souhaitez vendre votre bien ? Nous somme la pour vous accompagner !"
        />
            <Spacing value="10vh" />
        <Accompagnement/>
      <Fonctionnement/>
      <Spacing value="10vh"/>
      <Selled/>
      <Spacing value="10vh"/>
      <Form/>
        </div>
    )
}