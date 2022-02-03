import { useState } from "react";
import Header from "../componants/Header/Header";
import CoolForm from "../componants/Propriété/CoolForm/CoolForm";
import HouseList from "../componants/Propriété/HouseList/HouseList";
import Map from "../componants/Propriété/Map/Map";
import Search from "../componants/Search/Search";
import Spacing from "../componants/Spacing/spacing";
import axios from "axios";

export default function Proprietes({ houses, searchSelect }) {
  const [map, setMap] = useState(false);

  const list = {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    height: "auto",
    justifyContent: "space-between",
    position: "relative",
  };
  const search = {
    width: "80%",
    margin: "0 auto",
  };

  return (
    <div>
      <Spacing value="10vh" />
      <Header
        pageTitle="Nos biens à vendre"
        desc="Retrouvez l’ensemble de nos biens disponibles chez Demetis Immo !"
      />
      <div style={search}>{/* <Search/> */}</div>
      <Spacing value="10vh" />
      <CoolForm searchSelect={searchSelect} hideStatus={map} hide={setMap} />
      <section style={list}>
        <HouseList houses={houses} />
      </section>
    </div>
  );
}

export async function getServerSideProps(props) {
  const searchSelect = await axios
    .get(`${process.env.NEXT_PUBLIC_API}/biens?per_page=100`)
    .then((res) => res.data);
  if (props.query.filter !== undefined) {
    const userFilter = JSON.parse(props.query.filter);
    const houses = await axios
      .get(`${process.env.NEXT_PUBLIC_API}/biens`)
      .then((res) => res.data.filter((el) => el.acf.dispo === "Vrai"))
      .then((biens) =>
        biens.filter((bien) => {
          console.log(bien);
          return Object.keys(userFilter).every((searchKey) => {
            return bien.acf[searchKey] == userFilter[searchKey];
          });
        })
      );
    return {
      props: {
        houses,
        searchSelect,
      },
    };
  } else {
    const houses = await axios
      .get(`${process.env.NEXT_PUBLIC_API}/biens`)
      .then((res) => res.data.filter((el) => el.acf.dispo === "Vrai"));
    return {
      props: {
        houses,
        searchSelect,
      },
    };
  }
}
