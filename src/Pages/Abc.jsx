
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

function Abc() {
    document.title = "ABC";

    const [sidebarOpened, setSidebarOpened] = createSignal(false);


    return (<>
        {/* {() => `

            .sidebar-left {
                background-color: var(--bg-light);
            }

            .sidebar-left .sidebar-handle {
                position: absolute;
                top: 0;
                right: -15px;
            }

            
            @media only screen and (max-width: 765px) {
                .sidebar-left {
                    max-width: 80vw;
                    width: 100%;
                    position: fixed;
                    top: var(--navbar-height);
                    left: 0;
                    bottom: 0;
                    height: calc(100vh - var(--navbar-height));


                    z-index: 100;

                    translate: transformX(-100%);
                }

            }
        
        `} */}

        <div className="sidebar-left-controls">
            <button className="primary" onClick={() => setSidebarOpened(!sidebarOpened())}>
                <p className="g-icon ">expand_more</p>
            </button>
            <button className="invisible" onclick={() => setSidebarOpened(false)}>

            </button>
        </div>

        <div className="sidebar left nice-scroll  padding-medium scroll">
            <h5>Sidebar - L</h5>
            <ul>
                <li><A href="/abc">Accordeon</A></li>
                <li><A href="badge">Badge</A></li>
                <li><A href="buttons">Buttons</A></li>
                <li><A href="cards">Cards</A></li>
                <li><A href="carousels">Carousels</A></li>
                <li><A href="chips">Chips</A></li>
                <li><A href="dropdown">Dropdown</A></li>
                <li><A href="horizontal-ruler">Horizontal ruler</A></li>
                <li><A href="inputs">Inputs</A></li>
                <li><A href="tabs">Tabs</A></li>
                <li><A href="tiles">Tiles</A></li>
                <li><A href="tables">Tables</A></li>
                <li><A href="text">Text</A></li>
                <li><A href="leaders">Leaders</A></li>
                <li><A href="loading-animation">Loading animation</A></li>
                <li><A href="modals">Modals</A></li>

            </ul>

            <h5>Pokračování příště</h5>
            <ul>

                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
                <li>D</li>
            </ul>

        </div>

        <div className="sections">


            <div className="sections small">
                <div className="nejaka-section">
                    <div className="content padding-large">
                        <h1>Accordion</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>

                        <div className="flex row wrap ">
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    home
                                </p>
                                <p>Home</p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    phone
                                </p>
                                <p>Phone</p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    email
                                </p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    expand
                                </p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    expand_less
                                </p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    expand_more
                                </p>
                            </div>
                            <div className="card">
                                <p className="g-icon icon-btn large ">
                                    cookie
                                </p>
                            </div>


                        </div>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio aut voluptas sunt quas ratione sapiente culpa. Itaque minima, soluta accusamus dolorum ad quas repellendus dolore! Vitae aliquid eius ipsum.
                        </p>
                    </div>
                </div>

            </div>
        </div>


        <div className="sidebar right nice-scroll m-hidden padding-medium scroll" >
            <h5>Sidebar - R</h5>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <hr />
                <li>D</li>
            </ul>
        </div>

    </>);
}

export default Abc;


