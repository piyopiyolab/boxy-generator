import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber: 1,
                name: "Horizontal offset",
                value: 0,
                type: "Range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 2,
                name: "Vertical offset",
                value: 10,
                type: "Range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 3,
                name: "Blur radius",
                value: 15,
                type: "Range",
                minMax: [0, 250]
            },
            {
                inputNumber: 4,
                name: "Spread radius",
                value: -3,
                type: "Range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 5,
                name: "Color",
                value: "#4f4f4d",
                type: "color",
            }

        ]

    },
]



export const shadowSlice = createSlice({
    name: "shadow",
    initialState,
    reducers: {
        removeShadow: (state, action) => {
            console.log("remove")

        },
        addShadow: (state, action) => {
            //Push new object for new shadow
            state.push(
                {
                    id: nanoid(8),
                    active: true,
                    inset: false,
                    inputs: [
                        {
                            inputNumber: 1,
                            name: "Horizontal offset",
                            value: 0,
                            type: "Range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 2,
                            name: "Vertical offset",
                            value: 10,
                            type: "Range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 3,
                            name: "Blur radius",
                            value: 15,
                            type: "Range",
                            minMax: [0, 250]
                        },
                        {
                            inputNumber: 4,
                            name: "Spread radius",
                            value: -3,
                            type: "Range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 5,
                            name: "Color",
                            value: "#4f4f4d",
                            type: "color",
                        }

                    ]

                }
            )
        },
        updateShadowValue: (state, action) => {



            return state.map(shadow => {
                if (shadow.id === action.payload.shadowID) {
                    return {
                        ...shadow,
                        inputs: shadow.inputs.map(input => {
                            if (input.inputNumber === action.payload.inputNumber) {
                                return {
                                    ...input,
                                    value: action.payload.value
                                };
                            }
                            return input;
                        })
                    };
                }
                return shadow;
            });





        },
        updateCheckbox: (state, action) => {

            const currentShadow = state.find(
                shadow => shadow.id === action.payload.shadowID
            )
            currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        },

    }
})


export const { updateShadowValue, updateCheckbox, removeShadow, addShadow } = shadowSlice.actions
export default shadowSlice.reducer
