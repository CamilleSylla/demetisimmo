import { useEffect, useRef } from "react";
import style from "./displayer.module.scss";
import Picker from "./Picker/Picker";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Displayer({ product, gallery, setImgUrl }) {
  const wrapper = useRef();
  const carousel = useRef();

  useEffect(() => {
    if (gallery !== false) {
      wrapper.current.style.top = 0;
      carousel.current.style.transform = "translate3d(-50%, -50%, 0)";
    } else {
      wrapper.current.style.top = "-100%";
      carousel.current.style.transform = "translate3d(0, -100%, 0)";
    }
  }, [gallery]);
  return (
    <section ref={wrapper} className={style.wrapper}>
      <div ref={carousel} className={style.carousel}>
        <Carousel width="100%" dynamicHeight={false}>
          {product.acf.gallery.map((info, i) => {
            return (
              <div className={style.imgWrapper}>
                <img src={info.full_image_url} />
              </div>
            );
          })}
        </Carousel>
      </div>

      <button
        onClick={() => setImgUrl(false)}
        className={style.close}
      >
        Fermer
      </button>
            <img src="/Logo/Logo.svg" className={style.logo}/> 
    </section>
  );
}
