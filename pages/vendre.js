import Header from "../componants/Header/Header";
import Spacing from "../componants/Spacing/spacing";
import Form from "../componants/Vendre/Form/Form";
export default function Vendre () {

    return (
        <div>
            <Spacing value="10vh" />
            <Header
        pageTitle="Vendre mon bien avec Demetis Immo"
        desc="Vous souhaitez vendre votre bien ? Nous somme la pour vous accompagner !"
      />
      <Form/>
        </div>
    )
}