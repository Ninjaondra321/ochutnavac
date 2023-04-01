import { A } from "@solidjs/router"

import { createSignal, createEffect } from "solid-js";

function NavBar() {

    const [showBanner, setShowBanner] = createSignal(true);

    const [drawerShown, setDrawerShown] = createSignal(true);


    createEffect(() => {
        console.log("drawerShown", drawerShown());
    });

    return (<>

        <nav class='always-on-top'>

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
                    <header>Kavárna ZadeK</header>
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

            <div
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

            </div>



        </nav >
    </>);
}

export default NavBar;