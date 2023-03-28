
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


    for (let i = 1; i <= 12; i++) {
        w_i += `.w-${i}{width: ${((100 / 12 * i))}%;}`
        m_w_i += `.m-w-${i}{width: ${((100 / 12 * i))}%;}`
    }

    // let bg_positions = {
    //     "to-left":"", "to-right", "to-top", "to-bottom", "stretch", 

    // }


    console.log(w_i)
    console.log(m_w_i)

    return (
        <style>
            {w_i}


            {`
            @media only screen and (max-width: 768px) {
                    ${m_w_i}
            }`}






        </style>
    )

}

export default GenerateStyle

