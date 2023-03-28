import { A } from "@solidjs/router"

function NavBar() {
    return (<>

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
                    <header>Kavárna ZadeK</header>
                </div>
                <div className="center"></div>
                <div className="right">
                    <ul>
                        <A href="/">Home</A>
                        <A href="/abc">abc</A>
                        <li>Order</li>
                        <li>Contacts</li>
                    </ul>
                </div>

            </div>

        </nav>
    </>);
}

export default NavBar;