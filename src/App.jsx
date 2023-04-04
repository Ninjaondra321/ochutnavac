import logo from './logo.svg';


// import '../besamel_01.css';
import '../besamel_02.css';

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

import HomePage from './Pages/Homepage';

import { Router, Routes, Route } from "@solidjs/router"

import NavBar from './Components/NavBar';
import Abc from './Pages/Abc';
import Footer from './Components/Footer';
import Cookies from './Functions/Cookies';
import CookiesPage from './Pages/CookiesPage';


function App() {




  return (
    <>

      <GenerateStyle />
      <Router>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/abc" element={<Abc />} />

            <Route path="/cookies" element={<CookiesPage />} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>

          <Cookies />
        </div>
        <Footer />
      </Router>



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
