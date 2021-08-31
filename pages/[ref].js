import house from '../Json/House.json'
import Spacing from "../componants/Spacing/spacing";
import Header from '../componants/ProductPage/Header/Header';
import Gallery from '../componants/ProductPage/Gallery/Gallery';
import Description from '../componants/ProductPage/Informations/Description/Description';
import EnWrap from '../componants/ProductPage/Energie/EnWrap';
import Calculate from '../componants/ProductPage/Calculate/Calculate';

export default function Product ({product}) {

    const {ges} = product
    const {energie} = product
    const {prix} = product

    return (
        <div>
            <Spacing value='20vh'/>
            <Header product={product}/>
            <Spacing value='5vh'/>
            <Gallery product={product}/>
            <Spacing value='5vh'/>
            <Description product={product} />
            <Spacing value='5vh'/>
            <EnWrap ges={ges} energie={energie}/>
            <Spacing value='5vh'/>
            <Calculate prix={prix}/>
            <Spacing value='5vh'/>
        </div>
    )
}

export async function getServerSideProps ({params}){
        
    const  product = house.find(el => el.ref == params.ref )
    return {
        props: {
            product
        }
    }
}