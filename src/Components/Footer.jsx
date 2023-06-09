
import { A } from "@solidjs/router";

function Footer() {
    return (<>

        {/* <footer  >
            <div className="content">
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


                </div>

            </div>
        </footer> */}


        <footer className="boruvka">
            <div className="center responsive-rotate">
                <A href="/">Domů</A>
                <A href="/">Kariéra</A>
                <A href="/">Kontakt</A>
            </div>

            <div className="center row ">
                <A href="/"><span class="g-icon">facebook</span></A>
                <A href="/"><span class="g-icon">expand</span></A>
                {/* <A href="/"><span class="g-icon">instagram</span></A> */}
                <A href="/"><span class="g-icon">phone</span></A>
                <A href="/"><span class="g-icon">mail</span></A>
            </div>
            <div className="row space-between last-line ">
                <div className="row">
                    <A href="/sitemap">Sitemap</A>
                    <A href="/cookies">Cookies</A>
                </div>
                <div className="row ">
                    <p>
                        © 2023 Všechna práva vyhrazena.
                    </p>
                </div>
            </div>
        </footer>

        <footer class="boruvka row">
            <div className="column center">
                <h6>Stránky</h6>
                <ul className="">
                    <li><A href="/">Domů</A></li>
                    <li><A href="/career">Kariera</A></li>
                    <li><A href="/contact">Kontakt</A></li>
                    <li><A href="/sitemap">Sitemap</A></li>
                </ul>
            </div>

            <div className="column center">
                <h6>Kontakt</h6>
                <ul className="">
                    <li><A href="/">+420 123 456 789</A></li>
                    <li><A href="/">
                        example@email.com
                    </A></li>

                </ul>
            </div>



        </footer>



    </>);
}

export default Footer;