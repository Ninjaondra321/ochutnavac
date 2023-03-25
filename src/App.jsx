import logo from './logo.svg';

import '../besamel.css';

import NavbarsPage from './Pages/NavbarsPage';


// Import Img_0.png from ./Imgs/Img_0.png
import Img_0 from "./Imgs/Img_0.png";

function App() {
  return (
    <>
      {/* <NavbarsPage /> */}

      <nav>
        <div className="banner">

          <div className="left">
            <header>Ogarova Pizza</header>
          </div>
          <div className="center"></div>
          <div className="right">X</div>

        </div>

        <div className="navbar">

          <div className="left">
            <header>Ogarova Pizza</header>
          </div>
          <div className="center"></div>
          <div className="right">X</div>

        </div>

      </nav>


      <div className="sections">
        <div className="hero">
          <div className="bg">
            <img src={Img_0} alt="" class='make-section-bg to-right' id="a123" />
          </div>
          <div className="content ">
            <h1 class='main-heading responsive-heading'>Lorem ipsum</h1>

            <h4 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea sequi laudantium et officiis odio
              minus architecto modi ut eos blanditiis corporis recusandae, nulla minima beatae ab nemo molestias consequatur?
            </h4>
          </div>



        </div>

        <div className="cards-section">
          <div className="content">

            <div className="cards">
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

          </div>
        </div>


      </div>
    </>
  );
}

export default App;
