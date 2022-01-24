import axios from "axios";
import Fonctionnement from "../componants/Fonctionnement/Fonctionnement";
import Header from "../componants/Header/Header";
import Spacing from "../componants/Spacing/spacing";
import Form from "../componants/Vendre/Form/Form";
import Selled from "../componants/Vendre/Selled/Selled";
import Accompagnement from "../componants/Vendre/Vendu/Vendu";
export default function Vendre({ houses }) {
  return (
    <div>
      <Spacing value="10vh" />
      <Header
        pageTitle="Vendre mon bien avec Demetis Immo"
        desc="Vous souhaitez vendre votre bien ? Nous sommes la pour vous accompagner !"
      />
      <Spacing value="10vh" />
      <Accompagnement />
      <Fonctionnement />
      <Spacing value="10vh" />
      <Selled houses={houses} />
      <Spacing value="10vh" />
      <Form />
    </div>
  );
}

export async function getServerSideProps() {
  const houses = await axios
    .get(`${process.env.NEXT_PUBLIC_API}/biens`)
    .then((res) => res.data.filter((el) => el.acf.dispo != "Vrai"));
  return {
    props: {
      houses,
    },
  };
}
