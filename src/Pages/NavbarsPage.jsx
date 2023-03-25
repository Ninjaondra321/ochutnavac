import { createSignal } from "solid-js";


function NavbarsPage() {
    const [number, setNumber] = createSignal(0);

    console.log(number() + 25);

    return (<>

        <Show when={number() == 0}>

            <nav>
                <div className="left">
                    <header>Ogarova Pizza</header>
                </div>
                <div className="center"></div>
                <div className="right">X</div>
            </nav>

        </Show>

    </>
    );
}

export default NavbarsPage;