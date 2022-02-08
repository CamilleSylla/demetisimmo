import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../componants/Header/Header";
import Layout from "../componants/Layout/Layout";
import Spacing from "../componants/Spacing/spacing";
import Agent from "../componants/Team/Agent/Agent";
import Members from "../componants/Team/Members/Members";
import { TeamContext } from "../context/TeamContext";

export default function Equipe({ team }) {
  const [agent, setAgent] = useContext(TeamContext);


  useEffect(() => {
    if (!agent) {
      setAgent(team[0]);
    }
  });

  return (
    <div>
      <Spacing value="10vh" />
      <Header
        pageTitle="Rencontrez notre équipe de spécialistes"
        desc="Demetis Immo met à votre disposition ses conseillers."
      />
        <Agent team={team} agent={agent} />
        <Members team={team} agent={agent} setAgent={setAgent} />
    </div>
  );
}
export async function getServerSideProps() {

  const team = await axios
    .get(`${process.env.NEXT_PUBLIC_API}/agent`)
    .then((res) => res.data);
  return {
    props: {
      team,
    },
  };
}
