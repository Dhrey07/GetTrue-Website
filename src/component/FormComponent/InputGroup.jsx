import styles from "./FormStyles.module.css";
import PropTypes from "prop-types";

// --| This component will be used as a form group for every form used. It returns a label and input with props
const InputGroup = ({ inputType, label, required, value, inputName,
  onChange, inputMin, inputMax, placeHolder, }) => (
  <div className={styles.inputwrapper}>
    <p>{label} {required ? <span className="input-required">*</span> : null}{" "}</p>
    <input
      className={`${styles.input}`} type={inputType}
      min={inputMin} max={inputMax}
      required={required} name={inputName}
      value={value} onChange={onChange}
      placeholder={placeHolder}
    />
  </div>
);

InputGroup.propTypes = {
  inputType: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  inputName: PropTypes.string,
  placeHolder: PropTypes.string,
  inputMin: PropTypes.any,
  inputMax: PropTypes.any,
  onChange: PropTypes.func,
};

export default InputGroup;
