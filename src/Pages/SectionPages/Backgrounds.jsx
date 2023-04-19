// IMport img_0
import Img_0 from "../../Imgs/Img_20.png";


function BackgroundsPage() {
    return (<div class="sections">

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
            <img src={Img_0} alt="" class="make-section-bg to-left" />
            <div className="content">
                <h1>Stretch</h1>
            </div>
        </div>
        <div className="idk bg">
            <img src={Img_0} alt="" class="make-section-bg to-right" />
            <div className="content">
                <h1>Stretch</h1>
            </div>
        </div>

        <div className="idk">
            <div className="content bg" style={{ "border-radius": "40px" }}>
                <img src={Img_0} alt="" class="make-section-bg default " />
                <h3>Hello</h3>
            </div>
        </div>



    </div>);
}

export default BackgroundsPage;