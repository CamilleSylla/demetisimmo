import house from '../Json/House.json'
import Spacing from "../componants/Spacing/spacing";
import Header from '../componants/ProductPage/Header/Header';
import Gallery from '../componants/ProductPage/Gallery/Gallery';
import Description from '../componants/ProductPage/Informations/Description/Description';
import EnWrap from '../componants/ProductPage/Energie/EnWrap';
import Calculate from '../componants/ProductPage/Calculate/Calculate';
import Displayer from '../componants/ProductPage/ImageDisplayer/Displayer';
import { useState } from 'react';

export default function Product ({product}) {
    const [gallery, setGallery] = useState({
        all: product.gallery,
        target: product.gallery[0],
        active: false
    })
    const {ges, energie, prix} = product


    return (
        <div style={{position: "relative"}}>
            <Displayer product={product} gallery={gallery} setImgUrl={setGallery}/>
            <Spacing value='20vh'/>
            <Header product={product}/>
            <Spacing value='5vh'/>
            <Gallery product={product} gallery={gallery} setImgUrl={setGallery}/>
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