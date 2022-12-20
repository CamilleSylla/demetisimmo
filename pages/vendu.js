import axios from "axios";
import HouseList from "../componants/Propriété/HouseList/HouseList";
import Spacing from "../componants/Spacing/spacing";

export default function Venndu({houses}) {
    console.log(houses);
    const list = {
        display: "flex",
        width: "90%",
        margin: "0 auto",
        height: "auto",
        justifyContent: "space-between",
        position: "relative",
      };
    return (
        <div>
             <Spacing value="10vh" />
             <section style={list}>
<HouseList houses={houses}></HouseList>
             </section>
        </div>
    )
}


export async function getServerSideProps() {
    const houses = await axios
      .get(`${process.env.NEXT_PUBLIC_API}/biens/?per_page=100`)
      .then((res) => res.data.filter(el => el.acf.dispo !== "Vrai"));
    return {
      props: {
        houses,
      },
    };
  }