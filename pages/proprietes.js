import Header from "../componants/Header/Header";
import CoolForm from "../componants/Propriété/CoolForm/CoolForm";
import HouseList from "../componants/Propriété/HouseList/HouseList";
import Search from "../componants/Search/Search";
import Spacing from "../componants/Spacing/spacing";

export default function Proprietes () {
    const list ={
        display: "flex",
        width: "90%",
        margin: "0 auto",
        height: "auto"
    }
    const search = {
        width: "80%",
        margin: "0 auto"
    }

    return (
        <div>
            <Spacing value="10vh"/>
            <Header pageTitle="Nos propriétés à vendre" desc="Retrouvez l'ensemble de nos propriétés disponible chez Demetis Immo !"/>
            <div style={search}>
                {/* <Search/> */}
            </div>
                <CoolForm/>
            <Spacing value="10vh"/>
            <section style={list}>
                <HouseList/>
            <div style={{width: "50%", maxHeight: "50vh", background: "red"}}>
        Map
            </div>
            </section>
        </div>
    )
}