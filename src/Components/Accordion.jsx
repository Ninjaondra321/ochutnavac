
function Accordion() {
    return (<>
        <h1>Accordion</h1>

        <div className="accordion-parent">
            <div className="accordion">
                <div className="accordion-item opened">

                    <div className="accordion-header"
                        onTouchStart={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                        onTouchEnd={() => { console.log("touchend") }}
                        onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}

                    >
                        <h5>Accordion</h5>
                    </div>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                        </p>
                    </div>
                </div>
                <div className="accordion-item "

                >
                    <div className="accordion-header"
                        // onTouchStart={(e) => { e.target.parentElement.classList.toggle("closed"); }}

                        // Make it so that compatibile with both touch and mouse
                        onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                        onTouchEnd={(e) => { e.target.parentElement.classList.toggle("closed"); }}

                    >
                        <h5>Accordion</h5>
                    </div>
                    <div className="accordion-content ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header"
                        onTouchEnd={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                        onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                    >

                        <h5>Accordion</h5>
                    </div>
                    <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Accordion;