
function Accordion() {
    return (<>
        <h1>Accordion</h1>


        <div className="accordion-nice">
            <div className="accordion-item opened">

                <button className=" accordion-header"
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
            <div className="accordion-item "

            >
                <button className="accordion-header"
                    // onTouchStart={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                    on
                    // Make it so that compatibile with both touch and mouse
                    onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                    onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}

                >
                    Proč máme tak vysoké IQ, jako nikdo jiný?
                </button>
                <div className="accordion-content ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                    </p>
                </div>
            </div>
            <div className="accordion-item">
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

    </>);
}

export default Accordion;