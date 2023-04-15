import Img_20 from "../Imgs/Img_0.png";
import Img_1 from "../Imgs/Img_1.png";
import Img_2 from "../Imgs/Img_2.png";
import Img_3 from "../Imgs/Img_3.png";
import Img_4 from "../Imgs/Img_4.png";
import Img_5 from "../Imgs/Img_5.png";
import Img_6 from "../Imgs/Img_6.png";
import Img_7 from "../Imgs/Img_7.png";
import Img_8 from "../Imgs/Img_8.png";
import Img_9 from "../Imgs/Img_9.png";
import Img_10 from "../Imgs/Img_10.png";
import Img_11 from "../Imgs/Img_11.png";
import Img_12 from "../Imgs/Img_12.png";
import Img_13 from "../Imgs/Img_13.png";
import Img_14 from "../Imgs/Img_14.png";
import Img_15 from "../Imgs/Img_15.png";
import Img_16 from "../Imgs/Img_16.png";


import { createSignal, mergeProps, Match, onMount } from "solid-js";


function ImgCarousel(props) {

    let carouselRef;

    const merged = mergeProps({
        imgs: [
            { "img": Img_20, "alt": "Img_20" },
            { "img": Img_1, "alt": "Img_1" },
            { "img": Img_2, "alt": "Img_2" },
            { "img": Img_3, "alt": "Img_3" },
            { "img": Img_4, "alt": "Img_4" },
            { "img": Img_5, "alt": "Img_5" },
        ]
    }, props);

    function scrollLeft() {
        carouselRef.scrollLeft = carouselRef.scrollLeft - 200;
    }

    function scrollRight() {
        carouselRef.scrollLeft = carouselRef.scrollLeft + 200;
    }



    return (<div style="position:relative; height:100%" class="carousel-parent ">
        <button class="carousel-control-l" onClick={scrollLeft} >chevron_left</button>
        <button class="carousel-control-r" onClick={scrollRight} >chevron_right</button>

        <div className="carousel " ref={carouselRef}>
            {merged.imgs.map((img, index) =>
                <img src={img.img} alt={img.alt} />
            )}
        </div>

    </div>);
}

export default ImgCarousel;