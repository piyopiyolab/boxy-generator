
//transform shadow.inputs[{}] into string for copying the CSS code
export default function getBoxShadowValue(shadow) {

    let finalString = ""
    shadows.forEach(shadow => {
        //only active shadow
        if (shadow.active) {
            shadow.inputs.forEach(input => {

                //range input
                if (input.type === "Range") finalString += `${input.value}px `
                //color input
                else if (input.type === "color") finalString += `${input.value}`
            })
            if (shadow.inset) finalString += ` inset`

            //More than 1 shadow
            if (shadow.indexOf(shadow) === shadow.length - 1) finalString += ";"
            else finalString += ";"
        }

    });
    return finalString;
}