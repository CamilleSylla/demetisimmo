import Header from "../componants/Header/Header";
import Spacing from "../componants/Spacing/spacing";
import BackgroundLayer from "../componants/Team/BackgroundLayer/BackgroundLayer";
import Selector from "../componants/Team/Selector/Selector";

export default function Equipe () {

    return (
        <div>
            <Spacing value="10vh" />
            <Header
        pageTitle="Rencontrez notre equipe Spécialistes"
        desc="Demmetis Immo met a votre disposition ses conseillers"
        />
            <Spacing value="5vh" />
        <BackgroundLayer/>
        <Selector/>
            <Spacing value="10vh" />
        </div>
    )
}