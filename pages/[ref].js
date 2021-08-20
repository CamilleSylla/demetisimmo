import house from '../Json/House.json'
import Spacing from "../componants/Spacing/spacing";
import Header from '../componants/ProductPage/Header/Header';
import Gallery from '../componants/ProductPage/Gallery/Gallery';
import Description from '../componants/ProductPage/Informations/Description/Description';

export default function Product ({product}) {

    return (
        <div>
            <Spacing value='20vh'/>
            <Header product={product}/>
            <Spacing value='5vh'/>
            <Gallery product={product}/>
            <Spacing value='5vh'/>
            <Description product={product} />
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