// Import images from 0 to 35
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

import Img_0 from "../Imgs/Img_20.png";

import mapa from "../Imgs/mapa.png";
import Accordion from "../Components/Accordion";


// import { MetaProvider, Title, } from '@solidjs/meta';



function HomePage() {
    document.title = "A new title";

    return (<>
        <div className="sections">
            <div className="hero">
                <div className="bg">
                    <img src={Img_0} alt="" class='make-section-bg stretch darken' />
                </div>
                <div className="content ">
                    <div className="left padding-large w-7 m-w-12">

                        <h1 class='main-heading responsive-heading'>Lorem ipsum</h1>

                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea sequi laudantium et officiis odio
                            minus architecto modi ut eos blanditiis corporis recusandae, nulla minima beatae ab nemo molestias consequatur?
                        </p>

                        <div className="to-right">
                            <button class='btn btn-primary'>Lorem ipsum</button>

                        </div>
                    </div>
                </div>

            </div>
            <div className="padding"></div>


            <div className="test-section">
                <div className="bg">
                    <img src={Img_0} alt="" class='make-section-bg default' />
                </div>
                <div className="content h-500px">
                    <div className="left padding-large w-7 m-w-12">
                        <h1 class='main-heading responsive-heading'>Lorem ipsum</h1>
                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea sequi laudantium et officiis odio
                            minus architecto modi ut eos blanditiis corporis recusandae, nulla minima beatae ab nemo molestias consequatur?
                        </p>
                    </div>
                </div>
            </div>
            <div className="padding"></div>
            <div className="test-section">
                <div className="bg">
                    <img src={Img_0} alt="" class='make-section-bg to-right w-8 auto-height' />
                </div>
                <div className="content h-500px">
                    <div className="left padding-large w-7 m-w-12">
                        <h1 class='main-heading responsive-heading'>Lorem ipsum</h1>
                        <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea sequi laudantium et officiis odio
                            minus architecto modi ut eos blanditiis corporis recusandae, nulla minima beatae ab nemo molestias consequatur?
                        </p>
                    </div>
                </div>
            </div>

            <div className="padding-large"></div>
            <div className="hned-vymaz-section">
                <div className="content">
                    <img src={Img_20} className="" loading="eager" />
                </div>
            </div>

            <div className="carousel-section">
                <div className="content">


                    <div className="carousel image-carousel carousel-medium">
                        <img src={Img_0} />
                        <img src={Img_1} />
                        <img src={Img_2} />
                        <img src={Img_3} />
                        <img src={Img_4} />
                        <img src={Img_5} />
                    </div>


                </div>
            </div>

            <div className="klidne-vymaz-section">
                <div className="content">
                    <img src={Img_13} alt="" />
                </div>
            </div>

            <div className="vymaz">
                <div className="content">
                    {/* <img src={Img_20} className="" />
            <img src={Img_20} className="darken" />
            <img src={Img_20} className="darken-more" /> */}

                </div>
            </div>

            <div className="cards-section">
                <div className="content">

                    <div className="cards ">
                        <div className="card">
                            <h5>Ahoj</h5>
                        </div>
                        <div className="card">
                            <h5>Rad te vidim</h5>
                        </div>
                        <div className="card">
                            <h5>Jak je?</h5>
                        </div>
                    </div>
                </div>

            </div>

            <div className="font-test">
                <div className="content">

                    <h1 class='header responsive-heading'>Font test</h1>
                    <h1>Font test ooooooooooooooo</h1>
                    <h2>Font test ooooooooooooooo</h2>
                    <h3>Font test ooooooooooooooo</h3>
                    <h4>Font test ooooooooooooooo</h4>
                    <h5>Font test ooooooooooooooo</h5>
                    <h6>Font test ooooooooooooooo</h6>
                    <p>Font test</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quae perferendis consectetur soluta doloremque itaque, commodi sapiente magni atque officiis odit architecto eum veniam quidem deserunt, omnis explicabo tenetur nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum sequi quibusdam, necessitatibus provident excepturi iusto tempore, error magnam sunt, vero cumque doloribus perferendis dolorum illo incidunt. Earum, provident tempora</p>

                </div>
            </div>

            <div className="accordion-section">
                <div className="content">
                    <Accordion />
                </div>
            </div>


            <div className="cards-section">

                <div className="content">
                    <div className="cards">
                        <div className="card">
                            <h5>Ahoj</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, odio fugit laudantium suscipit asperiores minima libero voluptates ea molestias nulla sed itaque, ab perferendis totam enim repudiandae provident! Magni, cum.</p>
                        </div>
                        <div className="card">
                            <h5>Ahoj</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, minus, voluptas soluta, repellendus voluptatum hic facere dolores similique praesentium modi voluptatibus ipsam fuga blanditiis. Soluta laborum distinctio reiciendis autem accusamus?</p>
                        </div>
                        <div className="card">
                            <h5>Ahoj</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, vitae? Officia, quo. Ipsa ducimus quisquam id quasi dolore asperiores dolorem dignissimos ad earum temporibus. Magnam cum eius fugit mollitia enim.</p>
                        </div>
                        <div className="card">
                            <h5>Ahoj</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sit dolorem consequatur eum velit quae vel cupiditate obcaecati doloremque asperiores sequi distinctio adipisci corporis maiores, quia quidem unde rem incidunt.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="idk-section">
                <div className="content">
                    <img src={Img_15} alt="" loading="lazy" />
                </div>
            </div>




            <div className="accordion-section">
                <div className="content">

                </div>
            </div>


            <div className="width-test-section">
                <div className="content">
                    <div className="w-2 m-w-6 test">
                        Tomato
                    </div>
                    <div className="w-5 test">
                        Tomato
                    </div>
                    <div className="w-12 test">
                        Tomato
                    </div>
                    <div className="w-10 test">
                        Tomato
                    </div>

                    <div style={{ display: "flex" }} className="w-8 ">
                        <div className="w-2 test m-w-4">
                            AA
                        </div>            <div className="w-1 test m-w-6 ">
                            AA
                        </div>            <div className="w-2 test m-w-12 ">
                            AA
                        </div>            <div className="w-3 test m-w-8">
                            AA
                        </div>            <div className="w-5 test  m-w-2">
                            AA
                        </div>            <div className="w-1 test  m-w-3">
                            AA
                        </div>
                    </div>




                </div>
            </div>


            <div className="padding"></div>




        </div>
    </>);
}

export default HomePage;