
function FormPage() {
    return (<div class="sections">
        <div className="padding-large"></div>
        <div class="section">
            <div className="content">
                <h1>Form page</h1>

                <div className="w-12 center">
                    <form action="https://api.staticforms.xyz/submit" method="post" className="tile terciary">
                        <input type="text" name="honeypot" style="display:none" />
                        <input type="hidden" name="accessKey" value="097efb22-c16e-4fbf-af52-6db19e4c4f6f" />



                        <div className="row">

                            {/* Křestní */}
                            <div className="input w-6 m-w-12 padding-small" >
                                <label htmlFor="name" class="">Name
                                    <div className="tooltip">
                                        *
                                        <div className="tooltip-window top">
                                            Musí být vyplněno
                                        </div>

                                    </div>
                                </label>
                                <input type="text" name="name" id="name" placeholder="Mirek" />
                            </div>

                            {/* Příjmení */}
                            <div className="input w-6 m-w-12 padding-small">
                                <label htmlFor="surname" class="">Surname</label>
                                <input type="text" name="surname" id="surname" placeholder="Novák" />
                            </div>




                        </div>

                        {/* Telefoní číslo */}
                        <div className="input padding-small">
                            <label htmlFor="telephone" class="">Telefoní číslo</label>
                            <input type="text" name="Hello" id="telephone" placeholder="Novák" />
                        </div>

                        {/* Zpráva */}
                        <div className="input padding-small">
                            <label htmlFor="myMessage" class="">Zpráva</label>
                            <textarea name="$myMessage" id="myMessage" cols="30" rows="10" placeholder="Zpráva"></textarea>
                        </div>



                        {/* Odeslat */}
                        <div className="w-12 pos-e">
                            <input type="submit" value="Odeslat" class="btn primary" />
                        </div>




                    </form>
                </div>

            </div>
        </div>
    </div>);
}

export default FormPage;