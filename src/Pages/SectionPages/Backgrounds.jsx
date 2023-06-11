// IMport img_0
import Img_0 from "../../Imgs/Img_20.png";

import pub from "../../Imgs/pub.jpg";
import pasta from "../../Imgs/pasta.jpg";


function BackgroundsPage() {
    return (<div class="sections">

        <div className="padding">

        </div>

        <div className="hero-01" style={{ background: "var(--secondary-color)" }}>
            <div className="content center padding-large">
                <h1 className="responsive display">BEŠAMEL</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}

                >Skvělý css framework</h4>
                <div className="responsive-rotate center padding-medium">
                    <button className="secondary large">Ukázky</button>
                    <button className="primary large">Dokumentace</button>
                </div>
            </div>
        </div>

        <div className="padding">
            <hr />
        </div>

        <div className="hero-02 bg dark h-600px">
            <img src={pub} alt="pubImg" class="make-section-bg darken-more" />
            <div className="content center padding-large">
                <h1 className="responsive display">Restaurace Paříž</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}

                >Nejlepší pivo v okolí</h4>
            </div>
        </div>

        <div className="padding">
            <hr />
        </div>

        <div className="hero-03 bg  " style="background: #f5ad4338">
            <div className="content responsive-rotate">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

                <div className="w-6 m-w-11 bg padding-large">
                    <img src={pasta} alt="pubImg" style="position: relative; border-radius:9px" class="make-section-bg" />
                </div>
            </div>
        </div>



        <div className="padding">
            <hr />
        </div>


        <div className="hero-04 bg  " style="background: #f5ad4338">
            <div className="make-section-bg to-right bg w-6" >
                <img src={pasta} alt="pubImg" class="make-section-bg" />
            </div>

            <div className="content row padding-large">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

            </div>
        </div>

        <div className="padding">
            <hr />
        </div>



        <div className="hero-04 bg  " style="background: #f5ad4338">
            <div className="make-section-bg to-right bg w-7" >
                <img src={pasta} alt="pubImg" class="make-section-bg" style="border-radius:500px 0 0 500px" />
            </div>

            <div className="content row padding-large">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

            </div>
        </div>

        <div className="padding">
            <hr />
        </div>


        <div className="section-1 bg">
            <div className="content  bg padding-large responsive-rotate">
                <div className="make-section-bg">
                    <h6 style={{ color: "rgba(0,0,0,0.4)", "font-size": "calc(10vw + 50px )" }}>#1</h6>
                </div>

                <div className="w-5 m-w-12 h-12 center padding">
                    <h1>Section one</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae aspernatur, incidunt quibusdam vero deleniti unde voluptatibus perferendis illo dolorem odit ea fugiat qui adipisci possimus iusto eligendi similique officia?</p>
                    <div className="w-12 to-right">
                        <button className="primary large m-w-12 center">Button</button>
                    </div>
                </div>

                <div className="w-7 m-w-12 padding">
                    <img src={pasta} alt="pubImg" />
                </div>

            </div>
        </div>

        <div className="section-1 bg">
            <div className="content  bg padding-large responsive-rotate  m-reversed">
                <div className="make-section-bg to-right" style={{ "flex-direction": "column-reverse" }}>
                    <h6 style={{ color: "rgba(0,0,0,0.4)", "font-size": "calc(10vw + 50px )" }}>#2</h6>
                </div>

                <div className="w-7 m-w-12 padding">
                    <img src={pasta} alt="pubImg" />
                </div>

                <div className="w-5 m-w-12 h-12 center padding">
                    <h1>Section two</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae aspernatur, incidunt quibusdam vero deleniti unde voluptatibus perferendis illo dolorem odit ea fugiat qui adipisci possimus iusto eligendi similique officia?</p>
                    <div className="w-12 ">
                        <button className="primary large m-w-12 center">Button</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="pricing-section">
            <div className="content">
                <h1>Pricing</h1>

                <div className="row center">
                    <div className="card w-4 m-w-12  h-10 padding center">
                        <p className="muted">Basic</p>
                        <h4>150 Kč</h4>
                        <ul class="plain">
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                        </ul>
                        <button className="secondary w-12 center">Buy</button>
                    </div>
                    <div className="card primary w-4 h-12 m-w-12 padding center">
                        <p className="muted">Basic</p>
                        <h4>150 Kč</h4>
                        <ul class="plain">
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                        </ul>
                        <button className="primary w-12 center">Buy</button>
                    </div>
                    <div className="card w-4 m-w-12 h-10  padding  center">
                        <p className="muted">Basic</p>
                        <h4>150 Kč</h4>
                        <ul class="plain">
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                            <li><span className="icon">done</span>Free 1GB Storage</li>
                        </ul>
                        <button className="secondary w-12 center">Buy</button>
                    </div>
                </div>
            </div>


        </div>

        <div className="priority-section">
            <div className="content center">
                <h1>Naše priority</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id sapiente animi ipsa in, expedita aperiam numquam quam doloremque exercitationem.</p>
                <div className="row">
                    <div className="tile">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>
                    <div className="tile">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>
                    <div className="tile">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>


                </div>
            </div>
        </div>

        <hr />

        <div className="priority-section">
            <div className="content center">
                <h1>Naše priority</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique id sapiente animi ipsa in, expedita aperiam numquam quam doloremque exercitationem.</p>
                <div className="row all-center">
                    <div className="tile column">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>
                    <div className="tile column">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>
                    <div className="tile column">
                        <div className="head-icon"
                            style="
                            background: #f44336;
                            color: white;
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            "
                        >
                            <span className="icon">forest</span>
                        </div>
                        <h1>AHoj</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus quod accusamus ab inventore, quis at consequatur reiciendis aliquam ullam.</p>
                    </div>


                </div>
            </div>
        </div>


        <div className="form-section">
            <div className="content row space-between">
                <div className="left pc-w-7">
                    <img src={Img_0} alt="" />
                </div>

                <div className="right  w-5 padding ">
                    <div className="tile secondary">
                        <h1>Formulář</h1>

                        <form action="">
                            <div className="input">
                                <label for="name">Jméno</label>
                                <input type="text" name="name" id="name" />

                            </div>
                            <div className="input">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="input">
                                <label for="message">Zpráva</label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            </div>

                            <div className="input">
                                <button type="submit">Odeslat</button>
                            </div>


                        </form>

                    </div>
                </div>

            </div>
        </div>


        <div className="gallery-section">
            <div class="parent w-12 h-400px">
                <div class="div1 bg">
                    <img src={Img_0} alt="" class="make-section-bg" />
                </div>
                <div class="div2 bg">
                    <img src={pasta} alt="" class="make-section-bg" />
                </div>
                <div class="div3 bg">
                    <img src={Img_0} alt="" class="make-section-bg" />
                </div>
                <div class="div4 bg">
                    <img src={pub} alt="" class="make-section-bg" />
                </div>
                <div class="div5 bg">
                    <img src={Img_0} alt="" class="make-section-bg" />
                </div>
                <div class="div6 bg">
                    <img src={pasta} alt="" class="make-section-bg" />
                </div>
                <div class="div7 bg">
                    <img src={pasta} alt="" class="make-section-bg" />
                </div>
            </div>
        </div>



        <div className="section">
            <div className="content">

                <h1>Backgrounds</h1>
            </div>
        </div>

        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg" />
            <div className="content">
                <h1>Bez</h1>
            </div>
        </div>
        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg default" />
            <div className="content">
                <h1>Default</h1>
            </div>
        </div>
        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg stretch" />
            <div className="content">
                <h1>Stretch</h1>
            </div>
        </div>
        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg to-left" />
            <div className="content">
                <h1>To Left</h1>
            </div>
        </div>
        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg to-right" />
            <div className="content">
                <h1>To Right</h1>
            </div>
        </div>
        <div className="idk bg">
            <div className="w-6 make-section-bg">
                <img src={Img_0} alt="" class=" make-section-bg " />
                asfsaasfasd
            </div>
            <p class="make-section-bg " style={{ color: "rgba(90,90,90,0.7)" }} >Hellloooo wooootlllf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deleniti corrupti quidem libero inventore debitis ab beatae eveniet consectetur maiores rem incidunt omnis earum molestiae totam animi, sapiente, fuga cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita, eum, libero dicta quisquam tenetur nulla molestiae aspernatur optio at natus nam voluptas! Aliquid mollitia, molestias blanditiis iste quisquam quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, amet sequi. Libero recusandae labore, reprehenderit consectetur tempora inventore minus fugit sed explicabo nobis cum blanditiis vel odio ipsam aperiam qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium distinctio molestiae repellendus pariatur ipsa at, illum modi numquam ullam assumenda culpa autem perferendis aliquid officiis nesciunt tempore nihil amet itaque?</p>
            <div className="content">
                <h1>Idk</h1>
            </div>
        </div>

        <div className="idk">
            <div className="content bg" style={{ "border-radius": "40px" }}>
                <img src={Img_0} alt="" class="make-section-bg default " />
                <h3>Hello</h3>
            </div>
        </div>

        <div className="klide-vymaz bg">
            <div className="w-6">

                <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, minus rem voluptatibus, dolore unde dolores praesentium repudiandae fuga eius ea vel iusto, natus nihil illum quam necessitatibus nulla obcaecati voluptate! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aliquid, cumque impedit dolor, iste illum facilis deserunt cupiditate ab, provident corrupti enim est nulla exercitationem totam? Enim exercitationem porro adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos modi magni cumque excepturi illum tenetur totam commodi! Eaque quas odit beatae, esse dolore laborum sunt maxime labore inventore, architecto nisi?</p>
            </div>

            <h3>Ahoj</h3>
        </div>

        <div className="idk bg" >
            <img src={Img_0} alt="" class="make-section-bg" />
            <div className="content">
                <iframe src="/" frameborder="0" style={{ resize: "both" }} ></iframe>

            </div>
        </div>
    </div>);
}

export default BackgroundsPage;