import { A } from "@solidjs/router"

import Img_26 from "../Imgs/Img_18.png";

import { createSignal } from "solid-js";

function NavBar() {

    const [showBanner, setShowBanner] = createSignal(true);

    const [drawerShown, setDrawerShown] = createSignal(false);



    return (<>

        <nav class='always-on-top '>

            {showBanner() &&
                <div className="banner">

                    <div className="left">
                    </div>
                    <div className="center">
                        <header>Nové menu najdete <a href="#">zde</a>

                        </header>
                    </div>

                    <div className="right">

                        <button className="icon-btn small " onClick={() => setShowBanner(false)}>
                            close
                        </button>
                    </div>

                </div>
            }

            <div className="navbar ">

                <div className="left">
                    <A href="/#">
                        <span className="icon-btn ">
                            coffee
                        </span>
                        <header>Kavárna ZadeK</header>

                    </A>
                </div>
                <div className="center"></div>
                <div className="right">
                    <div className="m-hidden">
                        <A href="/">Home</A>
                        <A href="/abc">abc</A>
                        <div className="dropdown">

                            <p className="dropdown-heading">Dropdown</p>
                            <div className="dropdown-window">
                                <A href="/dropdown">Dropdown</A>
                                <A href="/dropdown">Dropdown</A>
                            </div>
                        </div>
                        <div className="dropdown">
                            <p className="dropdown-heading">Dropdown</p>
                            <div className="dropdown-window">
                                <A href="/dropdown">Dropdown</A>
                                <A href="/dropdown">Dropdown</A>
                            </div>
                        </div>

                    </div>
                    <div className="pc-hidden">
                        <button className="icon-btn large" id="menu-opener" onclick={() => setDrawerShown(!drawerShown())}>

                            menu

                        </button>
                    </div>
                </div>

            </div>

            {/* <div
                className={drawerShown() ? "drawer pc-hidden opened" : "drawer pc-hidden closed"}
            >
                <A href="/">Home</A>
                <A href="/abc">abc</A>
                <div className="accordion">
                    <div className="accordion-item closed" >

                        <button className="accordion-header"
                            onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                        >
                            Accordion
                        </button>
                        <div className="accordion-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                            </p>
                        </div>
                    </div>
                </div>

            </div> */}

            <div
                // className={drawerShown() ? " nav-drawer drawer pc-hidden opened" : "nav-drawer drawer pc-hidden closed"}
                className={"nav-drawer drawer pc-hidden" + (drawerShown() ? " opened" : " closed")}
            >
                <div className="bg">
                    <img src={Img_26} style={{ filter: "opacity(0.4)" }} class="make-section-bg  default darken-more" />
                </div>

                <div className="drawer-content to-left">

                    <A href="/">Home</A>
                    <A href="/abc">abc</A>
                    <h4>Hovno hoří</h4>
                    <div className="accordion-plain">
                        <div className="accordion-item closed center " >

                            <button className="accordion-header h4"
                                onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                                onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            >
                                Accordion

                            </button>
                            <div className="accordion-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </nav >
    </>);
}

export default NavBar;