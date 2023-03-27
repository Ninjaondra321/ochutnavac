function GenerateStyle() {

    var output = ""

    for (let i = 1; i <= 12; i++) {
        output += `.w-${i}{width: ${((100 / 12 * i))}%;}`

    }

    console.log(output)

    return (
        <style>
            {output}

        </style>
    )

}

export default GenerateStyle

