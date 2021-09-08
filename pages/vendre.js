import Fonctionnement from "../componants/Fonctionnement/Fonctionnement";
import Header from "../componants/Header/Header";
import Spacing from "../componants/Spacing/spacing";
import Form from "../componants/Vendre/Form/Form";
import Vendu from "../componants/Vendre/Vendu/Vendu";
export default function Vendre () {

    return (
        <div>
            <Spacing value="10vh" />
            {/* <Header
        pageTitle="Vendre mon bien avec Demetis Immo"
        desc="Vous souhaitez vendre votre bien ? Nous somme la pour vous accompagner !"
      /> */}
      <Form/>
      <Fonctionnement/>
      <Vendu/>
      <Spacing value="10vh"/>
        </div>
    )
}