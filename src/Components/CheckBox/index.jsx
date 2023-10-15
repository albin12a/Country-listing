/* eslint-disable react/prop-types */
import "./Checkbox.scss"
const Checkbox=(props)=>{
    return <label className="checbox-wrapper">{props?.label}
    <input type="checkbox"  checked={props?.check} onChange={props.onChange}/>
    <span className="checkmark"></span>
  </label>
}
export default Checkbox