import { useState, useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowRange from "./ShadowRange"
import ShadowCheckbox from "./ShadowCheckbox"
import { removeShadow } from "../../redux/reducers/shadows"
import { useDispatch } from "react-redux"




function Shadow({ panelNumber, shadow }) {
    const [toggleShadow, setToggleShadow] = useState(false)
    const dispatch = useDispatch()

    const shadowInputs = shadow.inputs.map((input, index) => {
        if (input.type === "Range") {
            return <ShadowRange
                key={index}
                inputData={shadow.inputs[index]}
                shadowID={shadow.id}
            />
        }
        else if (input.type === "color") {
            return <ShadowColorPicker
                key={index}
                inputData={shadow.inputs[index]}
                shadowID={shadow.id}
            />
        }
    })

    useEffect(() => {
        if (panelNumber === 1) {
            setToggleShadow(true)
        }
    }, [])

    return (
        <>
            <li
                className=" bg-gray-50 border-b border-gray-300">
                <button
                    onClick={() => setToggleShadow(!toggleShadow)}
                    className="w-full flex py-4 px-6 justify-between items-center hover:bg-gray-100">
                    <span>Shadow {panelNumber}</span>
                    <img
                        style={{
                            transform: `${toggleShadow ? "rotate(90deg) " : "rotate(0deg)"}`
                        }}
                        className="w-6 font-bold"
                        src={chevron}
                        alt="chevron icon" />
                </button>
                {toggleShadow && <>
                    <div className="flex items-end px-6 pt-4">
                        <ShadowCheckbox name={"active"} shadowID={shadow.id} />
                        <ShadowCheckbox name={"inset"} shadowID={shadow.id} />

                        <button
                            onClick={() => dispatch(removeShadow())}
                            className="ml-auto text-sm bg-red-600 text-white  hover:bg-red-700 py-1 px-3 rounded">Remove</button>

                    </div>
                    <div className="px-6 py-4">{shadowInputs}</div>
                </>}
            </li>
        </>
    )
}
export default Shadow