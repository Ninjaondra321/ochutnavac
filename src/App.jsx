import logo from './logo.svg';

import '../besamel.css';

import NavbarsPage from './Pages/NavbarsPage';


// Import images from 0 to 35
import Img_0 from "./Imgs/Img_0.png";
import Img_1 from "./Imgs/Img_1.png";
import Img_2 from "./Imgs/Img_2.png";
import Img_3 from "./Imgs/Img_3.png";
import Img_4 from "./Imgs/Img_4.png";
import Img_5 from "./Imgs/Img_5.png";
import Img_6 from "./Imgs/Img_6.png";
import Img_7 from "./Imgs/Img_7.png";
import Img_8 from "./Imgs/Img_8.png";
import Img_9 from "./Imgs/Img_9.png";
import Img_10 from "./Imgs/Img_10.png";
import Img_11 from "./Imgs/Img_11.png";
import Img_12 from "./Imgs/Img_12.png";
import Img_13 from "./Imgs/Img_13.png";
import Img_14 from "./Imgs/Img_14.png";
import Img_15 from "./Imgs/Img_15.png";
import Img_16 from "./Imgs/Img_16.png";

import Img_20 from "./Imgs/Img_20.png";

import mapa from "./Imgs/mapa.png";

import GenerateStyle from './Functions/GenerateStyle';

function App() {


  return (
    <>
      {/* <NavbarsPage /> */}
      <GenerateStyle />

      <nav class='always-on-top'>
        <div className="banner">

          <div className="left">
          </div>
          <div className="center">
            <header>Nové menu najdete <a href="#">zde</a>

            </header>
          </div>
          <div className="right">X</div>

        </div>

        <div className="navbar ">

          <div className="left">
            <header>Ogarova Pizza</header>
          </div>
          <div className="center"></div>
          <div className="right">
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Order</li>
              <li>Contacts</li>
            </ul>
          </div>

        </div>

      </nav>


      <div className="sections">
        <div className="hero">
          <div className="bg">
            <img src={Img_0} alt="" class='make-section-bg to-right' id="a123" />
          </div>
          <div className="content ">
            <div className="left padding-large w-6 m-w-12">

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
        <div className="padding-large"></div>

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

            <h1 class='header'>Font test</h1>
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
            <div className="accordion-parent">
              <div className="accordion">
                <div className="accordion-item opened">

                  <div className="accordion-header">
                    <h5>Accordion</h5>
                  </div>
                  <div className="accordion-content ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                    </p>
                  </div>
                </div>
                <div className="accordion-item ">
                  <div className="accordion-header">
                    <h5>Accordion</h5>
                  </div>
                  <div className="accordion-content ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                    </p>
                  </div>
                </div>
                <div className="accordion-item ">
                  <div className="accordion-header">
                    <h5>Accordion</h5>
                  </div>
                  <div className="accordion-content ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                    </p>
                  </div>
                </div>
              </div>
            </div>

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

            <div style={{ display: "flex" }}>
              <div className="w-2 test">
                AA
              </div>            <div className="w-1 test ">
                AA
              </div>            <div className="w-2 test ">
                AA
              </div>            <div className="w-3 test ">
                AA
              </div>            <div className="w-5 test ">
                AA
              </div>            <div className="w-1 test ">
                AA
              </div>
            </div>



          </div>
        </div>



        <div className="footer-section">
          <div className="content footer-paloma">

            <div className="left">
              <h5>Info</h5>
              <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Order</li>
                <li>Contacts</li>
              </ul>
            </div>

            <div className="middle">
              <h5>Kontakt</h5>

              <table>
                <thead style={{ display: "none" }}>
                  <tr>
                    <th>x</th>
                    <th>x</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td><span class="g-icon ">
                      call
                    </span></td>
                    <td>+420 123 456 789</td>
                  </tr>

                  <tr>
                    <td><span class="g-icon">
                      mail
                    </span></td>
                    <td> example@gmail.com </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="right">
              <h5>Adresa</h5>

              <img src={mapa} alt="" style={{ "height": "25vh", width: "25vw" }} />

            </div>



          </div>

        </div>




      </div>

      <div style={{
        background: "black", height: "35px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }} >
        <p style={{
          color: "white",
          fontsize: "16px"

        }}>Created by</p>
        <a href='#' style={{
          background: "linear-gradient(to right, #10E332, #1BD6FF)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          fontsize: "16px",
          "margin-left": "5px",


        }}>NoTime</a>
      </div>
    </>
  );
}

export default App;
