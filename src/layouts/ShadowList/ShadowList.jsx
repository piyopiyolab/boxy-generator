
import { useSelector, useDispatch } from "react-redux"
import { addShadow } from "../../redux/reducers/shadows"
import Shadow from "./Shadow"

function ShadowList() {
    const shadows = useSelector(state => state.shadows)
    const dispatch = useDispatch()

    return (
        <div>
            <div
                className="flex justify-between p-6 border-b border-gray-300">
                <p
                    className="font-bold text-lg">Customize Shadow</p>
                <button
                    onClick={() => dispatch(addShadow())}
                    className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 hover:focus-ring-blue-700 focus:ring-offset-2 text-white">
                    Add a shadow
                </button>

            </div>
            <ul>
                {shadows.map((shadow, index) => (
                    <Shadow
                        shadow={shadow}
                        key={shadow.id}
                        panelNumber={index + 1} />
                ))}
            </ul>
        </div>
    )
}
export default ShadowList