import house from '../Json/House.json'
import Spacing from "../componants/Spacing/spacing";
import Header from '../componants/ProductPage/Header/Header';
import Gallery from '../componants/ProductPage/Gallery/Gallery';
import Description from '../componants/ProductPage/Informations/Description/Description';
import EnWrap from '../componants/ProductPage/Energie/EnWrap';

export default function Product ({product}) {

    const {ges} = product
    const {energie} = product

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