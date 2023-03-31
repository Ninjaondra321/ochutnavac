import { A } from "@solidjs/router"

import { createSignal } from "solid-js";

function NavBar() {

    const [showBanner, setShowBanner] = createSignal(true);


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
                        <ul>
                            <A href="/">Home</A>
                            <A href="/abc">abc</A>
                            <li>Order</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="pc-hidden">
                        <button className="icon-btn large">

                            menu

                        </button>
                    </div>
                </div>

            </div>

        </nav>
    </>);
}

export default NavBar;