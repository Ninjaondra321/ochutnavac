
function Footer() {
    return (<>

        <footer>


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

                {/* 
                <div id="mapa" style="width:600px; height:400px;"></div>
                <script type="text/javascript">
                    {`
                    var stred = SMap.Coords.fromWGS84(14.41, 50.08);
                    var mapa = new SMap(JAK.gel("mapa"), stred, 10);
                    mapa.addDefaultLayer(SMap.DEF_BASE).enable();
                    mapa.addDefaultControls();
                    `}
                </script> */}

            </div>




        </footer>

    </>);
}

export default Footer;