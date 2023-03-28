
function GenerateStyle() {

    var w_i = "" // 12 columns 
    var w_i_px = "" // 12 columns
    var w_i_vw = "" // 12 columns

    var m_w_i = "" // 12 columns
    var m_w_i_px = "" // 12 columns
    var m_w_i_vw = "" // 12 columns

    var h_i_vh = ""
    var h_i_px = ""

    var m_h_i_vh = ""
    var m_h_i_px = ""

    var m_bg_positions = ""


    // TWELVES SYSTEM
    for (let i = 1; i <= 12; i++) {
        let twelves_system = 100 / 12 * i

        w_i += `.w-${i}{width: ${twelves_system}%;}`
        m_w_i += `.m-w-${i}{width: ${twelves_system}%;}`
    }

    // PIXELS SYSTEM
    for (let i = 1; i <= 25; i++) {
        let pixels = i * 50

        w_i_px += `.w-${pixels}px{width: ${pixels}px;}`
        m_w_i_px += `.m-w-${pixels}px{width: ${pixels}px;}`

        h_i_px += `.h-${pixels}px{height: ${pixels}px;}`
        m_h_i_px += `.m-h-${pixels}px{height: ${pixels}px;}`

    }



    console.log(w_i)
    console.log(m_w_i)

    return (
        <style>
            {w_i}
            {w_i_px}
            {w_i_vw}

            {h_i_px}
            {h_i_vh}



            {`
            @media only screen and (max-width: 768px) {
                    ${m_w_i}
                    ${m_w_i_px}
                    ${m_h_i_px}
                    ${m_h_i_vh}
            }`}
        </style>
    )

}

export default GenerateStyle

