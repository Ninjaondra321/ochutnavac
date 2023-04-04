import { onMount, createSignal } from "solid-js";

function Cookies() {

    const [showCookies, setShowCookies] = createSignal(false);
    const [cookiesAllowed, setCookiesAllowed] = createSignal(undefined);

    console.warn("Cookies.jsx");

    onMount(() => {
        try {
            c = JSON.parse(localStorage.getItem('COOKIES-NOTIME'));
            if (c["alalytical"] === true) {
                setCookiesAllowed(true);
            } else if (c["alalytical"] === undefined) {
                setShowCookies(true);
            }
        } catch (e) {
            setShowCookies(true);
            console.log(e)
            console.log(showCookies())

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
                <div className="content">

                    <h3>Cookiessss</h3>
                    ashgask asgzu gs uzgkasfzug uzsaguz gfzhgs uzag fuzsguzhguzag zufgvhsafvheck

                    <div className="">

                        <button className="btn btn-primary" >
                            Povolit </button>
                        <button className="btn btn-secondary" >
                            Zakázat </button>




                    </div>
                </div>
            </div>
        }

    </>);
}

export default Cookies;