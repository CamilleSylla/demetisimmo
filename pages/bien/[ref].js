import Spacing from "../../componants/Spacing/spacing";
import Header from "../../componants/ProductPage/Header/Header";
import Gallery from "../../componants/ProductPage/Gallery/Gallery";
import Description from "../../componants/ProductPage/Informations/Description/Description";
import EnWrap from "../../componants/ProductPage/Energie/EnWrap";
import Calculate from "../../componants/ProductPage/Calculate/Calculate";
import Displayer from "../../componants/ProductPage/ImageDisplayer/Displayer";
import { useState } from "react";
import axios from "axios";

export default function Product({ product, agent }) {
  const [gallery, setGallery] = useState(false);
  const { gaz, ener, prix } = product.acf;
  const findEddy = agent.find(info => info.acf.email === "teddy.beasse@demetisimmo.fr")

  return (
    <div style={{ position: "relative", width: "100vw" }}>
      <Displayer product={product} gallery={gallery} setImgUrl={setGallery} />
      <Spacing value="20vh" />
      <Header product={product} />
      <Spacing value="5vh" />
      <Gallery product={product} gallery={gallery} setImgUrl={setGallery} />
      <Spacing value="5vh" />
      <Description product={product} />
      <Spacing value="5vh" />
      {product.acf.type === "Terrain" ? null : <EnWrap ges={gaz} energie={ener} />}
      <Spacing value="5vh" />
      <Calculate eddyProfile={findEddy} prix={prix} />
      <Spacing value="5vh" />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.ref);
  const product = await axios
    .get(`http://api.demetisconseil.fr/wp-json/wp/v2/biens/${params.ref}`)
    .then((res) => res.data);

    const agent =  await axios.get(`${process.env.NEXT_PUBLIC_API}/agent`)
  .then(res => res.data)

  return {
    props: {
      product,
      agent
    },
  };
}
