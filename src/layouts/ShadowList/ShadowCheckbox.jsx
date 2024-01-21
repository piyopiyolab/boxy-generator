import { useDispatch, useSelector } from "react-redux"
import { updateCheckbox } from "../../redux/reducers/shadows"

function ShadowCheckbox({ name, shadowID }) {

    const dispatch = useDispatch()

    const checkBoxShadow = useSelector(state => state.shadows.find
        (shadow => shadow.id === shadowID))


    const handleCheckboxChange = ({ shadowID, name }) => {
        dispatch(updateCheckbox({ shadowID, name }));
    };

    return (
        <>
            <input
                onChange={() => handleCheckboxChange({ name, shadowID })}
                type="checkbox"
                checked={checkBoxShadow[name]}
                id={`checkbox-${name}-${shadowID}}`}
                className="h-4 w-4 border-gray-300 rounded mr-2" />

            <label
                className="leading-4 mr-5" htmlFor={`checkbox-${name}-${shadowID}}`}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>

        </>
    )
}
export default ShadowCheckbox