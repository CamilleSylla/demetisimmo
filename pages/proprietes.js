import { useState } from "react";
import Header from "../componants/Header/Header";
import CoolForm from "../componants/Propriété/CoolForm/CoolForm";
import HouseList from "../componants/Propriété/HouseList/HouseList";
import Map from "../componants/Propriété/Map/Map";
import Search from "../componants/Search/Search";
import Spacing from "../componants/Spacing/spacing";
import axios from 'axios'

export default function Proprietes({houses}) {
    const [map, setMap] = useState(false)

  const list = {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    height: "auto",
    justifyContent: "space-between",
    position: "relative"
  };
  const search = {
    width: "80%",
    margin: "0 auto",
  };

  return (
    <div>
      <Spacing value="10vh" />
      <Header
        pageTitle="Nos propriétés à vendre"
        desc="Retrouvez l'ensemble de nos propriétés disponible chez Demetis Immo !"
      />
      <div style={search}>{/* <Search/> */}</div>
      <Spacing value="10vh" />
      <CoolForm hideStatus={map} hide={setMap}/>
      <section style={list}>
        <HouseList houses={houses} />
        {map ? <Map/> : null}
          
      </section>
    </div>
  );
}

export async function getServerSideProps (props) {
  if (props.query.filter !== undefined) {
    console.log(props.query.filter);
  } else {
    console.log("rien")
  }
  const houses = await axios.get(`${process.env.NEXT_PUBLIC_API}/biens`)
  .then(res => res.data.filter(el => el.acf.dispo === "Vrai"))
  return {
    props: {
      houses
    }
  }
}
