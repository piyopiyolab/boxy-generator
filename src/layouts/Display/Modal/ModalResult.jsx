
import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import { useSelector } from "react-redux"




function ModalResult({ closeModal }) {

    const shadowValues = useSelector(state => state.shadows)

    return (
        <div
            onClick={closeModal}
            className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
            <div
                onClick={e => e.stopPropagation()}
                className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]">

                <div className="flex items-end mb-5">
                    <p className="font-semibold mr-5">Here is your code 🎉</p>
                    <button
                        className="ml-auto mr-2 text sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">Copy</button>


                    <button
                        onClick={closeModal}
                        className="text sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                        Close</button>

                </div>
                <p className="rounded bg-gray-100 p-5">
                    <span className="font-semibold">box shadow :
                    </span><span> {getBoxShadowValue(shadowValues)}</span>
                </p>
            </div>



        </div>
    )
}
export default ModalResult