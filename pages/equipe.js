import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../componants/Header/Header";
import Layout from "../componants/Layout/Layout";
import Spacing from "../componants/Spacing/spacing";
import Agent from "../componants/Team/Agent/Agent";
import Members from "../componants/Team/Members/Members";

export default function Equipe ({team}) {

    const [agent, setAgent] = useState(null)

    useEffect(() => {
        if (!agent) {
            setAgent(team[0])
        }
    })

    return (
        <div>
            <Spacing value="10vh" />
            <Header
        pageTitle="Rencontrez notre equipe Spécialistes"
        desc="Demmetis Immo met a votre disposition ses conseillers"
        />
            <Layout>
                <Agent team={team} agent={agent}/>
                <Members team={team} agent={agent} setAgent={setAgent}/>
            </Layout>
        </div>
    )
}
export async function getServerSideProps () {
    // https://api.demetisconseil.fr/wp-json/wp/v2/biens
  
    const team = await axios.get(`${process.env.NEXT_PUBLIC_API}/agent`)
    .then(res => res.data)
    return {
      props: {
        team
      }
    }
  }