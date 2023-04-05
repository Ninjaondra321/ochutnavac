import { onMount, createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";



function Cookies() {

    const [showCookies, setShowCookies] = createSignal(false);
    const [cookiesAllowed, setCookiesAllowed] = createSignal(undefined);


    onMount(() => {
        try {
            let c = JSON.parse(localStorage.getItem('COOKIES-NOTIME'));
            if (c["analytical"] === true) {
                setCookiesAllowed(true);
            } else if (c["analytical"] === undefined) {
                setShowCookies(true);
            }
        } catch (e) {
            setShowCookies(true);

        }

    });



    return (<>
        {cookiesAllowed() &&
            <script type="text/javascript">
                {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "cs0aql3zma");
    `}

            </script>
        }


        {showCookies() &&

            <div className="cookies-banner center">
                <div className="content flex">


                    <div className="head w-9 m-w-12">

                        <Show when={cookiesAllowed()}>
                            <h1>sad</h1>
                        </Show>
                        <button className="primary" onClick={() => setCookiesAllowed(true)}>asd</button>
                        <h3>Cookies
                            are:
                            {cookiesAllowed() ? "allowed" : "not allowed"}
                            {
                                cookiesAllowed()
                            }


                        </h3>
                        <p>Tato stránka používá soubory cookies. Pokud souhlasíte s používáním souborů cookies, klikněte na tlačítko Povolit. Pokud ne, klikněte na tlačítko Zakázat.
                            Více informací o souborech cookies naleznete <A href="/cookies">zde</A>.</p>
                    </div>
                    <div className="center w-3 m-w-12">

                        <button className="primary w-12">
                            Povolit </button>
                        <button className="secondary w-12">
                            Zakázat </button>







                    </div>
                </div>
            </div>
        }

    </>);
}

export default Cookies;