/* eslint-disable react/prop-types */
import "./InputField.scss";
const InputField = (props) => {
  return (
    <div className="form-section">
      {!!props?.label && <label>{props?.label}</label>}
      <input
        className={`${!!props?.error && "err-field"}`}
        type={props?.type}
        value={props?.value}
        name={props?.name}
        placeholder={props?.placeholder}
        onChange={props?.onChange}
      />
      {!!props?.error && <span>{props?.errorMsg}</span>}
    </div>
  );
};
export default InputField;
