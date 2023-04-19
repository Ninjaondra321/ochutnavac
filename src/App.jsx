// SolidJS
import { createSignal, onMount, Show, lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router"

// Styles
import '../Styles/besamel_02.css';
import '../Styles/components.css';
import GenerateStyle from './Functions/GenerateStyle';


import logo from './logo.svg';


// Images 
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

//Pages
// import HomePage from './Pages/Homepage';
// import NavbarsPage from './Pages/NavbarsPage';
// import NavBar from './Components/NavBar';
// import Abc from './Pages/Abc';
// import Footer from './Components/Footer';
// import CookiesPage from './Pages/CookiesPage';
// import ComponentsPage from './Pages/Components';

const HomePage = lazy(() => import('./Pages/Homepage'));
const NavbarsPage = lazy(() => import('./Pages/NavbarsPage'));
const NavBar = lazy(() => import('./Components/NavBar'));
const Abc = lazy(() => import('./Pages/Abc'));
const Footer = lazy(() => import('./Components/Footer'));
const CookiesPage = lazy(() => import('./Pages/CookiesPage'));
const ComponentsPage = lazy(() => import('./Pages/Components'));

import BackgroundsPage from './Pages/SectionPages/Backgrounds';

// Components


// Functions
import Cookies from './Functions/Cookies';
import FootersPage from "./Pages/SectionPages/FootersPage";

function App() {

  const [analyticalCookiesAllowed, setAnalyticalCookiesAllowed] = createSignal(false);

  function setCookies(type, value) {
    let c;
    try {
      c = JSON.parse(localStorage.getItem("COOKIES-NOTIME"));
    } catch (e) {
      console.log(e);

      c = { "analytical": false };
    }
    c[type] = value;
    localStorage.setItem("COOKIES-NOTIME", JSON.stringify(c));
  }


  const my_routes = {
    "/": HomePage,
    "/abc": Abc,
    "/components": ComponentsPage,
    "/cookies": CookiesPage,
    "*": () => <div>Not found</div>


  }


  return (
    <>

      <GenerateStyle />
      <Router  >
        <NavBar />
        <div className="main ">
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/abc" element={<Abc />} />
            <Route path="/components" element={<ComponentsPage />} />

            <Route path="/cookies" element={<CookiesPage />} />

            {/* /sections */}
            {/* /sections/footers */}
            {/* /sections/navbars */}

            <Route path="/sections" element={<NavbarsPage />} />
            <Route path="/sections/footers" element={<FootersPage />} />
            <Route path="/sections/navbars" element={<NavbarsPage />} />
            <Route path="/sections/backgrounds" element={<BackgroundsPage />} />

            <Route path="*" element={<div>Not found</div>} />
          </Routes>

          {/* <div className="info">
            askjdbhHSBGHJG
          </div> */}

          <Cookies />
        </div>
        <Footer />
      </Router>


    </>
  );
}

export default App;
